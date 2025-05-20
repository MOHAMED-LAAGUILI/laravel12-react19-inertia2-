<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectsTableSeeder extends Seeder
{
    public function run(): void
    {
        $creator = User::first() ?? User::factory()->create();

        Project::factory()
            ->count(100)
            ->create([
                'name' => fake()->words(2, true),
                'description' => fake()->paragraph,
                'status' => fake()->randomElement(['pending', 'in_progress', 'completed']),
                'due_date' => now()->addDays(rand(5, 30)),
                'created_by' => $creator->id,
                'updated_by' => $creator->id,
                'image' => 'project-image' . rand(1, 5) . '.png',

            ]);
    }
}
