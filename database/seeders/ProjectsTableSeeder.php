<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectsTableSeeder extends Seeder
{
    public function run()
    {
        // Fetch first available user or create one via factory
        $user = User::first() ?? User::factory()->create();

        DB::table('projects')->insert([
            [
                'name' => 'Project Alpha',
                'description' => 'First sample project.',
                'status' => 'pending',
                'due_date' => now()->addDays(10),
                'created_by' => $user->id,
                'updated_by' => $user->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Project Beta',
                'description' => 'Second sample project.',
                'status' => 'in_progress',
                'due_date' => now()->addDays(20),
                'created_by' => $user->id,
                'updated_by' => $user->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Project Gamma',
                'description' => 'Third sample project.',
                'status' => 'completed',
                'due_date' => now()->addDays(30),
                'created_by' => $user->id,
                'updated_by' => $user->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
