<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use Carbon\Carbon;

class NewModuleCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'istart:new-module';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Notifies users of new available module';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        // Let's get the users that only have an actual Module
        $users = User::with(['moduleProgress' => function ($q) {
            $q->orderBy('created_at', 'DESC')->first();
        }])->whereHas('moduleProgress')->get();
        // get calls always return something
        if (!empty($users)) {
            foreach ($users as $user) {
                if (!empty($user->moduleProgress)) {
                    $currentModule = $user->moduleProgress->first();
                    $dayCheck = $currentModule->expires_at->diffInDays(Carbon::now());
                    if ($dayCheck == 0) {
                        // send out the email.
                        Mail::to((env('RECIEVE_EMAIL')))->send(new NewModuleAvailable($user));
                    }
                }
            }
        }
    }
}