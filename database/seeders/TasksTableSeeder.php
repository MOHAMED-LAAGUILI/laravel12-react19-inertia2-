<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Project;
use App\Models\Task;
use Illuminate\Database\Seeder;

class TasksTableSeeder extends Seeder
{
    public function run(): void
    {
        $creator = User::first() ?? User::factory()->create();

        $projects = Project::inRandomOrder()->limit(5)->get();
        if ($projects->count() < 5) {
            $projects = Project::factory()
                ->count(5)
                ->create([
                    'created_by' => $creator->id,
                    'updated_by' => $creator->id,
                ]);
        }

        $users = User::inRandomOrder()->limit(5)->get();
        if ($users->count() < 5) {
            $users = User::factory()->count(5)->create();
        }

        Task::factory()
            ->count(50)
            ->make()
            ->each(function ($task) use ($projects, $users, $creator) {
                $task->project_id = $projects->random()->id;
                $task->assigned_to = $users->random()->id;
                $task->created_by = $creator->id;
                $task->updated_by = $creator->id;
                $task->save();
            });
    }
}
