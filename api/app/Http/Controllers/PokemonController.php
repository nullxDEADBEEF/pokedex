<?php

namespace App\Http\Controllers;

use App\Models\Pokemon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;

class PokemonController extends Controller
{
  public function index()
  {
    $pokemons = Pokemon::all();
    return response()->json($pokemons);
  }

  public function show(string $id) 
  {
    $pokemon = Pokemon::find($id);
    if (!empty($pokemon))
    {
      return response()->json($pokemon);
    }
    else
    {
      return response()->json([
        "message" => "Pokemon not found"
      ], Response::HTTP_NOT_FOUND);
    }
  }

  public function store()
  {
    return response()->json([
      "message" => "Pokemon Added."
    ], Response::HTTP_CREATED);
  }

  public function update(Request $request, string $id)
  {
    if (Pokemon::where('id', $id)->exists())
    {
      return response()->json([
        "message" => "Pokemon Updated."
      ], Response::HTTP_OK);
    }
    else 
    {
      return response()->json([
        "message" => "Pokemon Not Found."
      ], Response::HTTP_NOT_FOUND);
    }
  }
}
