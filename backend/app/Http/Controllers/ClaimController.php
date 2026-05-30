<?php

namespace App\Http\Controllers;

use App\Models\Claim;
use App\Http\Requests\StoreClaimRequest;
use Illuminate\Http\JsonResponse;

class ClaimController extends Controller
{
    public function store(StoreClaimRequest $request): JsonResponse
    {
        $claim = Claim::create($request->validated() + ['user_id' => auth()->id(), 'status' => 'pending']);
        return response()->json($claim, 201);
    }

    public function updateStatus(Claim $claim, string $status): JsonResponse
    {
        $claim->update(['status' => $status]);
        return response()->json($claim);
    }
}
