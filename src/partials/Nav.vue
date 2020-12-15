<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container">
            <router-link class="navbar-brand" to="/">Home</router-link>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav custom-right pull-right">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/signup">Signup</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>