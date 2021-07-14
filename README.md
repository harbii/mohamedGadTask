<p align="center"> mohamed gad task</p>

## task
<!-- Hello Mahmoud, 
Thanks for your interest..
Kindly find the task below, deliver date at Tuesday (13/7/2021) -->

build a web portal for Customers to enable them register using Customer:[
- Name,
- Website,
- Email
- ..

]

After registration,
Email verification is required. 
once the verification is completed,
Customer can login,

create User with specific privileges :[
 - Admin/full access,
 - Sales/Sales Page,
 - Back Office/Configuration & Settings
 
]
Back office can view and modify the settings as needed.

Users can have either 1 or more privileges.

Sales Page should show sales data stored in Sales table: [ 
- id,
- User,
- payment

] -> [ 1, Lala, 1900 ][ 2, Dipsy, 200.01 ]

Configuration & Settings page shows data from config table: [ 
- id,
- sales target,
- sales user

] -> [ 1, 2000, Lala ][ 2, 3000.50, Dipsy ]

``` 
    Platform: Laravel 8.
```

## run project by command line:

``` 
    $ git clone https://github.com/harbii/mohamedGadTask.git mahmoudSamyTask
    $ cd mahmoudSamyTask
    $ composer install
    $ cp .env.example .env
    // set database name in .env file and create databese by that name
    // set email provider and password to send emails
    $ nano .env
    $ php artisan migrate
    $ php artisan serve    // to run server
```
