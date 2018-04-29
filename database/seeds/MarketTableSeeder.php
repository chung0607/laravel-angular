<?php

use Illuminate\Database\Seeder;

use App\Market;

class MarketTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('markets')->delete();
        Market::create(['name' => 'New York Stock Exchange']);
        Market::create(['name' => 'London Stock Exchange']);
        Market::create(['name' => 'Hong Kong Stock Exchange']);
        Market::create(['name' => 'Shanghai Stock Exchange']);
        Market::create(['name' => 'Deutsche Börse Frankfurt']);
    }
}
