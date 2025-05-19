<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Project;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TasksTableSeeder extends Seeder
{
    public function run()
    {
        // Ensure at least one user exists
        $user = User::first() ?? User::factory()->create();

        // Ensure at least three projects exist
        $projects = Project::take(3)->get();
        if ($projects->count() < 3) {
            $projects = Project::factory()->count(3)->create([
                'created_by' => $user->id,
                'updated_by' => $user->id,
            ]);
        }

        // Get more users for task assignment
        $assignedUsers = User::take(3)->get();
        if ($assignedUsers->count() < 3) {
            $assignedUsers = User::factory()->count(3)->create();
        }

        DB::table('tasks')->insert([
            [
                'project_id'   => $projects[0]->id,
                'assigned_to'  => $assignedUsers[0]->id,
                'name'         => 'Design database schema',
                'description'  => 'Create tables for the application.',
                'image'        => 'task-image1.png',
                'status'       => 'pending',
                'priority'     => 'high',
                'due_date'     => now()->addDays(10),
                'created_by'   => $user->id,
                'updated_by'   => $user->id,
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'project_id'   => $projects[0]->id,
                'assigned_to'  => $assignedUsers[1]->id,
                'name'         => 'Set up authentication',
                'description'  => 'Implement user login and registration.',
                'image'        => 'task-image2.png',
                'status'       => 'completed',
                'priority'     => 'medium',
                'due_date'     => now()->addDays(12),
                'created_by'   => $user->id,
                'updated_by'   => $user->id,
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'project_id'   => $projects[1]->id,
                'assigned_to'  => $assignedUsers[2]->id,
                'name'         => 'Create API endpoints',
                'description'  => 'Develop RESTful APIs for tasks.',
                'image'        => 'task-image3.png',
                'status'       => 'pending',
                'priority'     => 'low',
                'due_date'     => now()->addDays(15),
                'created_by'   => $user->id,
                'updated_by'   => $user->id,
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'project_id'   => $projects[2]->id,
                'assigned_to'  => $assignedUsers[0]->id,
                'name'         => 'Frontend integration',
                'description'  => 'Connect React frontend with backend.',
                'image'        => 'task-image4.png',
                'status'       => 'in_progress',
                'priority'     => 'high',
                'due_date'     => now()->addDays(20),
                'created_by'   => $user->id,
                'updated_by'   => $user->id,
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
        ]);
    }
}
