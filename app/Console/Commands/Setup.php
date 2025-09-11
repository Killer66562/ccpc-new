<?php

namespace App\Console\Commands;

use App\Models\User;
use DB;
use Exception;
use Hash;
use Illuminate\Console\Command;
use Spatie\Permission\Exceptions\RoleDoesNotExist;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Contracts\Console\Isolatable;

class Setup extends Command implements Isolatable
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:setup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        //
        try {
            DB::beginTransaction();

            $roles = ['admin'];
            foreach ($roles as $role) {
                try {
                    Role::findByName('admin');
                }
                catch (RoleDoesNotExist $exception) {
                    Role::create([
                        'name' => $role
                    ]);
                }
            }
            /*
            $admin_permissions = [
                'announcements.store', 
                'announcements.update', 
                'announcements.delete', 
                'registrations.update', 
                'registrations.delete', 
                'periods.viewAny', 
                'preiods.store', 
                'periods.update', 
                'periods.delete', 
                'comments.update', 
                'comments.delete'
            ];
            */
            $name = env('ADMIN_NAME', 'admin');
            $email = env('ADMIN_EMAIL', 'ccpc@gmail.com');
            $password = env('ADMIN_PASSWORD');

            if ($password === null || strlen($password) <= 0) {
                $this->fail('Please set the password');
            }
            
            $admin = User::where(['email' => $email])->first();
            if (!$admin) {
                $admin = User::create([
                    'name' => $name, 
                    'email' => $email, 
                    'password' => Hash::make($password)
                ]);
            }

            if (!$admin->hasRole('admin')) {
                $admin->assignRole('admin');
            }

            DB::commit();
            $this->info("Admin account generated", 'info');
        }
        catch (Exception $exception) {
            DB::rollBack();
            $this->fail($exception->getMessage());
        }
        
    }
}
