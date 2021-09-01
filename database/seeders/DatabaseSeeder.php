<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        [
//            \App\Models\Employee::factory(1000)->create(),
//            \App\Models\Supplier::factory(20)->create(),
            \App\Models\Category::factory(20)->create(),
        ];
        // \App\Models\User::factory(10)->create();
//        \App\Models\Employee::factory(1000)->create();
//        \App\Models\Supplier::factory(20)->create();
    }
}
