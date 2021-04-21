<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- CSRF Token END -->
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,600|Playfair+Display:700,700i"
        rel="stylesheet"
    />
{{--    <script src="{{ asset('/ckfinder/ckfinder.js')  }}"></script>--}}
{{--    <script src="https://ckeditor.com/apps/ckfinder/3.5.0/ckfinder.js"></script>--}}
{{--    <link rel="stylesheet" href=" {{ asset('/css/styles.css')  }}">--}}
{{--    <link rel="stylesheet" href="{{ asset('/css/app.css')  }}">--}}
    <title>Document 1.0</title>
</head>
<body>
<div id="app">
{{--    <example-component></example-component>--}}
{{--    <test-component></test-component>--}}
</div>

{{--<script src=" {{ asset('js/scripts.js')  }}"></script>--}}
{{--<script--}}
{{--    src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"--}}
{{--    integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"--}}
{{--    crossorigin="anonymous"--}}
{{--></script>--}}
{{--<script--}}
{{--    type="text/javascript"--}}
{{--    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"--}}
{{--></script>--}}
<script src="{{ asset('/js/app.js')  }}" ></script>
</body>
</html>
