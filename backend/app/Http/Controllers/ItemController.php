<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Http\Requests\StoreItemRequest;
use Illuminate\Http\JsonResponse;

class ItemController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Item::with('user')->latest()->get());
    }

    public function show(Item $item): JsonResponse
    {
        return response()->json($item->load('user', 'claims'));
    }

    public function store(StoreItemRequest $request): JsonResponse
    {
        $item = Item::create($request->validated() + ['user_id' => auth()->id()]);
        return response()->json($item, 201);
    }

    public function update(StoreItemRequest $request, Item $item): JsonResponse
    {
        $item->update($request->validated());
        return response()->json($item);
    }

    public function destroy(Item $item): JsonResponse
    {
        $item->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}
