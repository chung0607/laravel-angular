<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Stock Manager</title>

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
    <h1 class="title">Stock Manager</h1>

    <company-list companies="companies" callback="loadCompanies()"></company-list>

    <market-list markets="markets" stocks="stocks" companies="companies" callback="loadStocks()"></market-list>

    <stock-list stocks="stocks"></stock-list>
</div>

<!-- Scripts -->
<script src="js/app.js"></script>
</body>
</html>