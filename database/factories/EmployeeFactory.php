<?php

namespace Database\Factories;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Employee::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->phoneNumber(),
            'address' => $this->faker->address(),
            'salary' => $this->faker->numberBetween(1111,99999),
            'joining_date' => $this->faker->date("Y-m-d"),
            'nid' => $this->faker->randomDigitNotNull(),
            'photo' => $this->faker->imageUrl(240,200,"human"),
        ];
    }
}
