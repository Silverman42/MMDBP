<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Models\Settings;
use App\Models\Statistics;
use App\Models\Competitions;
use App\Models\Transactions;
use Illuminate\Console\Command;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Artisan;
use Spatie\Permission\Models\Permission;

class StartUp extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'start:setup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command runs the migrations, roles and permissions are been setup';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->info('New migrations are been fired up, relax while you get served...');
        Artisan::call('key:generate');
        Artisan::call('migrate:fresh');
        $this->info('Creating app permissions ....');
        $this->createPermissions();
        $this->info('Creating super admin ....');
        $this->createSuperAdmin();
        $this->info('Creating app setting ....');
        $this->createSettings();
        $this->info('Creating current competition ....');
        $competition = $this->createDefaultCompetition();
        $this->info('Creating client ....');
        $this->createClient($competition->id);
        $this->info('Initializing Other models ....');
        $this->initializeOtherModels();
        $this->info('Creating new statistics information ....');
        $this->createStatistics();
        $this->info('Your app is prepared and ready fly. Awesome !!');
    }

    public function createPermissions(){
        Permission::create(['name'=> 'update-personal-profile']);
        Permission::create(['name'=>'modify-clients']);
        Permission::create(['name'=>'modify-admins']);
        Permission::create(['name'=>'modify-settings']);
        Permission::create(['name'=>'modify-permissions']);
    }

    public function initializeOtherModels(){
        $transaction = new Transactions();
        $transaction->id = 998867;
        $transaction->save();
    }

    public function createStatistics(){
        $statistics = new Statistics();
        $statistics->naira_balance = 0.00;
        $statistics->save();
    }
    public function createSuperAdmin(){
        $admin = new User;
        $admin->password = Hash::make('secret2020');
        $admin->first_name = 'Joseph';
        $admin->last_name = 'Mark';
        $admin->is_admin = true;
        $admin->email = 'joseph@gmail.com';
        $admin->id = 998867;
        $admin->save();
        $admin_role = Role::create(['name'=> 'admin']);
        Role::create(['name'=> 'client']);
        $admin->assignRole($admin_role);
        $admin->givePermissionTo('modify-settings');
        $admin->givePermissionTo('modify-clients');
        $admin->givePermissionTo('modify-admins');
        $admin->givePermissionTo('modify-permissions');
        $admin->givePermissionTo('update-personal-profile');
    }

    public function createClient(int $competition_id){
        $client = new User;
        $client->password = Hash::make('secret2020');
        $client->first_name = 'Anita';
        $client->last_name = 'James';
        $client->email = 'anita@gmail.com';
        $client->competitions_id = $competition_id;
        $client->save();
        $client->assignRole('client');
    }

    public function createSettings(){
        $settings = new Settings;
        $settings->app_name = 'MMDBP';
        $settings->naira_charge = 1000;
        $settings->dollar_charge = 50;
        $settings->save();
    }

    public function createDefaultCompetition(){
        $competition = new Competitions;   
        $competition->year = '2020';
        $competition->start_date = "2020-12-13";
        $competition->end_date = "2021-1-13";
        $competition->is_current = true;
        $competition->id = 998867;
        $competition->save();
        $setting = Settings::first();
        $setting->current_competition_id = $competition->id;
        $setting->save();
        return $competition;
    }
}