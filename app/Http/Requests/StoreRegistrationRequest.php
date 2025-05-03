<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRegistrationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            'name' => ['required'], 
            'sid' => ['required'], 
            'university' => ['required'], 
            'department' => ['required'], 
            'email' => ['required', 'email'], 
            'tel' => ['required'], 
            'is_paid' => ['boolean'], 
            'account' => ['required'], 
            'user_id' => ['required', 'exists:users,id']
        ];
    }

    public function messages(): array {
        return [
            'name.required' => 'A name is required', 
            'sid.required' => 'A student id is required', 
            'university.required' => 'A university is required', 
            'department.required' => 'A department is required', 
            'email.required' => 'An email is required', 
            'email.email' => 'Not a valid email', 
            'tel.required' => 'A phone number is required', 
            'is_paid.boolean' => 'Needs to be boolean value', 
            'account.required' => 'A bank account is required', 
            'user_id.required' => 'An user id is required', 
            'user_id.exsits:users,id' => 'User does not exist'
        ];
    }
}
