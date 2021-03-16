<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Settings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $app_url = config('app.url');
            $table->id();
            $table->string('app_name',100)->default('MMDBP');
            $table->string('app_email',100)->default('admin@mmdbp.com');
            $table->string('app_url',100)->default('http://localhost:3000');
            $table->unsignedFloat('naira_charge')->default(0.00);
            $table->unsignedFloat('dollar_charge')->default(0.00);
            $table->foreignId('current_competition_id')->nullable();
            $table->enum('color_scheme',['blue','red','orange','green','indigo','gray'])->default('gray');
            $table->boolean('disable_client_profile_modification')->default(false);
            $table->boolean('disable_client_registration')->default(false);
            $table->boolean('recieve_client_emails')->default(false);
            $table->string('auth_logo',100)->default("{$app_url}/img/app_logo.svg");
            $table->string('auth_logo_id',100)->nullable();
            $table->string('dashboard_logo',100)->default("{$app_url}/img/dashboard_logo.svg");
            $table->string('dashboard_logo_id',100)->nullable();
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
        Schema::dropIfExists('settings');
    }
}
