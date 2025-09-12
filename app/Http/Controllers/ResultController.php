<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreResultRequest;
use App\Http\Requests\UpdateResultRequest;
use App\Models\Registration;
use App\Models\Result;
use Carbon\Carbon;
use DateTimeZone;
use Illuminate\Database\Query\Builder;
use Inertia\Inertia;

class ResultController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $query = Result::query()->with('person:id,name,university,department');

        $year = request()->query('year', null);
        if ($year !== null) {
            $year = (string)$year;
             $query = $query->whereHas('person', function ($builder) use ($year) {
                return $builder->where('year', '=', $year);
            });
        }
        else {
            $year = (string)Carbon::now(new DateTimeZone('+0800'))->year;
            $query = $query->whereHas('person', function ($builder) use ($year) {
                return $builder->where('year', '=', $year);
            });
        }
        
        $results = $query->orderBy('rank')->get();
        // 遮蔽 results 裡的 person.name
        $results = $results->map(function ($item) {
            $arr = $item->toArray();
            if (isset($arr['person']['name'])) {
                $arr['person']['name'] = $this->maskName($arr['person']['name']);
            }
            return $arr;
        })->values();

        $people = Registration::query()->where('year', '=', $year)->select(['id', 'name', 'university', 'department'])->get();
        $people->transform(function ($item) {
            $item->name = $this->maskName($item->name);
            return $item;
        });
        $showForm = request()->user()?->hasRole('admin') ? true : false;
        return Inertia::render('Results', [
            'results' => $results, 
            'year' => $year, 
            'people' => $people, 
            'showForm' => $showForm
        ]);
    }

    private function maskName(string $name): string
    {
        $length = mb_strlen($name, 'UTF-8');

        if ($length <= 1) {
            return $name;
        } elseif ($length == 2) {
            return mb_substr($name, 0, 1, 'UTF-8') . '*';
        } else {
            return mb_substr($name, 0, 1, 'UTF-8')
                . str_repeat('*', $length - 2)
                . mb_substr($name, -1, 1, 'UTF-8');
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreResultRequest $request)
    {
        //
        $data = $request->validated();
        Result::create($data);
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Result $result)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Result $result)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateResultRequest $request, Result $result)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Result $result)
    {
        //
        $valid = request()->user()?->can('delete', $result);
        if (!$valid) {
            return redirect()->route('home')->withErrors([
                'message' => 'You have no permission'
            ]);
        }
        $result->delete();
        return redirect()->back();
    }
}
