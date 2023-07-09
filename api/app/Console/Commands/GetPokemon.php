<?php

namespace App\Console\Commands;

use App\Models\Pokemon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class GetPokemon extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:get-pokemon';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetches pokemon from external api';

    /*)*
     * Execute the console command.
     */
    public function handle()
    {
        $response = Http::get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');

        foreach ($response['results'] as $pokemon) {
            Pokemon::upsert($pokemon, ['id'], ['url']);
        }
    }
}
