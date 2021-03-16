<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Statistics extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('statistics', function (Blueprint $table) {
            $table->unsignedFloat('naira_balance')->default(0.00);
            $table->unsignedFloat('dollar_balance')->default(0.00);
            $table->unsignedBigInteger('naira_deposit_count')->default(0);
            $table->unsignedBigInteger('dollar_deposit_count')->default(0);
            $table->unsignedBigInteger('withdraw_count')->default(0);
            $table->id();
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
        Schema::dropIfExists('statistics');
    }
}
