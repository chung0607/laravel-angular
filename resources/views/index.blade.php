<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Stock') }}</title>

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    <!-- Scripts -->
    <script>
      window.Laravel = <?php echo json_encode([
          'csrfToken' => csrf_token(),
      ]); ?>
    </script>
</head>
<body>
<div class="container" ng-controller="IndexController" ng-init="init('')">
    <a class="navbar-brand" href="@{{ url('/') }}">
        {{ config('app.name', 'Stock') }}
    </a>
    @{{hello}}

    <company></company>


    <form id="logout-form" action="@{{ url('/logout') }}" method="POST" style="display: none;">
        {{ csrf_field() }}
    </form>
</div>

<!-- Scripts -->
<script src="js/app.js"></script>
</body>
</html>