<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('facebook_url',120)->nullable();
            $table->string('twitter_url',120)->nullable();
            $table->string('instagram_url',120)->nullable();
            $table->string('phone_number',16)->nullable();
            $table->string('nationality',120)->nullable();
            $table->longText('address')->nullable();
            $table->string('avatar')->nullable();
            $table->string('avatar_id',120)->nullable();
            $table->string('passport_number',120)->nullable();
            $table->unsignedInteger('age')->nullable();
            $table->string('place_of_birth',120)->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('departure_airport_code',120)->nullable();
            $table->enum('educational_cert',['Secondary School Certificate',"Bachelor Degree","Master Degree (MSC)","Doctrorate Degree (PhD)"])->default("Bachelor Degree");
            $table->string('profession',120)->nullable();
            $table->string('hobbies',220)->nullable();
            $table->string('ambition',120)->nullable();
            $table->unsignedFloat('height')->default(0.00);
            $table->unsignedFloat('weight')->default(0.00);
            $table->unsignedInteger('shoe_size')->default(0);
            $table->enum('dress_size',['xxl','xl','l','m','s'])->default('l');
            $table->enum('bust_size',['xxl','xl','l','m','s'])->default('l');
            $table->enum('waist_size',['xxl','xl','l','m','s'])->default('l');
            $table->enum('skin_color',['Pale White',"Fair","Light Brown","Moderate Brown","Dark Brown","Black"])->default("Dark Brown");
            $table->enum('blood_type',['A+',"A-","B+","B-","O+","O-","AB+","AB-"])->default("A+");
            $table->boolean('can_smoke')->default(false);
            $table->boolean('is_vegetarian')->default(false);
            $table->boolean('is_active')->default(true);
            $table->boolean('is_admin')->default(false);
            $table->string('allergies',220)->nullable();
            $table->string('medications',220)->nullable();
            $table->string('surgeries',220)->nullable();
            $table->string('dietary_needs',220)->nullable();
            $table->string('recent_sickness',220)->nullable();
            $table->string('emergency_name',220)->nullable();
            $table->unsignedBigInteger('emergency_phone_number')->nullable();
            $table->string('emergency_relationship',120)->nullable();
            $table->string('emergency_email',120)->nullable();
            $table->string('signature')->nullable();
            $table->string('signature_id',120)->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->foreignId('competitions_id')->nullable();
            $table->enum('profile_stage',['payment','audition','finals'])->default('payment');
            $table->integer('position')->nullable();
            $table->boolean('has_paid')->default(false);
            $table->boolean('has_completed_medicals')->default(false);
            $table->boolean('has_completed_identity')->default(false);
            $table->boolean('has_completed_persona')->default(false);
            $table->boolean('has_completed_social')->default(false);
            $table->boolean('has_completed_emergency')->default(false);
            $table->boolean('has_completed_travel')->default(false);
            $table->softDeletes();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
