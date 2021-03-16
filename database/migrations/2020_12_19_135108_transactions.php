<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Transactions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->foreignId('user_id')->nullable();
            $table->foreignId('competitions_id')->nullable();
            $table->string('email',112)->nullable();
            $table->enum('transaction_type',['deposit','withdrawal'])->default('deposit');
            $table->boolean('is_completed')->default(false);
            $table->string('reference_id',122)->nullable();
            $table->enum('currency',['ngn','usd'])->default('ngn');
            $table->unsignedFloat('amount')->default(0.00);
            $table->unsignedFloat('balance')->default(0.00);
            $table->unsignedFloat('transaction_charge')->default(0.00);
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
        Schema::dropIfExists('transactions');
    }
}
