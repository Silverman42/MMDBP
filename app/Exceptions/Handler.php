<?php

namespace App\Exceptions;

use Throwable;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     * 
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        /**
         * The render function is customized to force the redirection of a request in the event
         * an error is flagged 
         */
        $response =  parent::render($request, $exception);
        if(in_array($response->status(),[500,503,404,403])){
            return Inertia::render('Error',['status' => $response->status(),'previous_url'=> url()->previous()])
            ->toResponse($request)
            ->setStatusCode($response->status());
        }
        elseif ($response->status() == 419 && $request->inertia() ) {
            return abort(409, '', ['X-Inertia-Location' => url()->previous()]);
        }
        return $response;
    }
}
