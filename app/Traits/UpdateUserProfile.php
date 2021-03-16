<?php
namespace App\Traits;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\SocialRequest;
use App\Http\Requests\TravelRequest;
use App\Http\Requests\MedicalRequest;
use App\Http\Requests\PersonaRequest;
use App\Http\Requests\IdentityRequest;
use App\Http\Requests\EmergencyRequest;
use Illuminate\Support\Facades\Request as FacadesRequest;

trait UpdateUserProfile{
    public function updateIdentityData(IdentityRequest $request){
        $user = $this->getProfileUser();
        try {
            $avatarData = replaceCloudFile('avatar','avatar',$user->avatar_id);
            $signatureData = replaceCloudFile('signature','signature',$user->signature_id);
            DB::beginTransaction();
            $user->update($request->all());
            $this->updateExtraIdentityData($avatarData,$signatureData, $user);
            DB::commit();
            return redirectBack('Your identity data has been succefully updated','Identity Data Updated','success');
            
        } catch (\Throwable $th) {
            logger($th->getMessage());
            return redirectBack('Your identity could not be updated at this time. Please try again later','Identity Data Update Failed','error');
        }
    }

    private function updateExtraIdentityData(object $avatarData = null, object $signatureData = null, User $user){
        $user->avatar = $avatarData->getSecurePath() ?? null;
        $user->avatar_id = $avatarData->getPublicId() ?? null;
        $user->signature = $signatureData->getSecurePath() ?? null;
        $user->signature_id = $signatureData->getPublicId() ?? null;
        $user->has_completed_identity = true;
        $user->save();
    }

    public function updateMedicalData(MedicalRequest $request){
        DB::beginTransaction();
        $user = $this->massAssignRequestParams($request);
        $user->has_completed_medicals = true;
        $user->save();
        DB::commit();
        return redirectBack('Your medical data has been succefully updated','Medical Data Updated','success');
    }

    public function updateSocialData(SocialRequest $request){
        DB::beginTransaction();
        $user = $this->massAssignRequestParams($request);
        $user->has_completed_social = true;
        $user->save();
        DB::commit();
        return redirectBack('Your social data has been succefully updated','Social Data Updated','success');
    }

    public function updateEmergencyData(EmergencyRequest $request){
        DB::beginTransaction();
        $user = $this->massAssignRequestParams($request);
        $user->has_completed_emergency = true;
        $user->save();
        DB::commit();
        return redirectBack('Your emergency data has been succefully updated','Emergency Data Updated','success');
    }

    public function updatePersonaData(PersonaRequest $request){
        DB::beginTransaction();
        $user = $this->massAssignRequestParams($request);
        $user->has_completed_persona = true;
        $user->save();
        DB::commit();
        return redirectBack('Your persona data has been succefully updated','Persona Data Updated','success');
    }

    public function getProfileUser(): User{
        return FacadesRequest::user();
    }

    private function massAssignRequestParams(object $request): User{
        $user = $this->getProfileUser();
        $user->update($request->all());
        return $user;
    }

    public function updateTravelData(TravelRequest $request){
        $user = $this->massAssignRequestParams($request);
        $user->has_completed_travel = true;
        $user->save();
        return redirectBack('Your travel data has been succefully updated','Travel Data Updated','success');
    }   
}