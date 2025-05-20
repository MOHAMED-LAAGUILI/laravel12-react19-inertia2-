<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->words(2, true),
            'description' => fake()->paragraph,
            'status' => fake()->randomElement(['pending', 'in_progress', 'completed']),
            'due_date' => now()->addDays(rand(5, 30)),
            'created_by' => fake()->randomNumber(),
            'updated_by' => fake()->randomNumber(),
            'image' => null,
        ];
    }
    
}
