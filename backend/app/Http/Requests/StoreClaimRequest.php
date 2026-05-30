<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreClaimRequest extends FormRequest
{
    public function authorize(): bool { return true; }

    public function rules(): array
    {
        return [
            'item_id' => 'required|exists:items,id',
            'message' => 'required|string|min:10',
        ];
    }
}
