https://www.youtube.com/watch?v=VrQRa-afCAk&t=62s

model + factory + migration
php artisan make:model Project -fm

migration + factory
php artisan make:migration create_projects_table --create=projects
php artisan make:factory ProjectFactory --model=Project

seed
php artisan make:seeder ProjectSeeder

migrate seed
php artisan migrate:refresh --seed

controller + requests + resource 
php artisan make:controller ProjectController --model=Project --requests --resource 

