<template>

  <v-app style="background-color: bisque;">
    
<img src="https://img.icons8.com/clouds/2x/login-rounded-right.png" class="rounded mx-auto d-block animated bounceInDown delay-0s" alt="Responsive image">
    
    <body >
    
    <div class="wrapper button container-fluid">
        <h1 class="animated tada delay-0s font" >- LOGIN -</h1><br>

        <h3 class="animated bounceInLeft delay-0s font" style="background-color: white">Username: <input type="text" name="user"> </h3><br><br>
        <h3 class="animated bounceInLeft delay-0s font" style="background-color: white">Password:  <input type="text" name="pass"></h3><br><br>

        <router-link tag="button" to="">
        <button class="butt animated bounceIn delay-1s font" type="submit">
            <h1>submit</h1>
        </button>
        </router-link>

      <br><br>

      <router-link tag="button" to="/home">
        <v-btn  class="butt animated bounceIn delay-1s font">
          USER
        </v-btn>
        </router-link>

    </div>
    
    </body>


  </v-app>
</template>

<script>



</script>

<style>
       .wrapper {
            text-align: center;
        }

        .button {
            position: absolute;
            top: 50%;
            margin-left: 50%;
            transform: translate(-50%, -50%);

        }

        .butt {
            
            background-color: rgb(245, 188, 138);
        
        }
        .font{
            font-family: 'Yeon Sung', cursive;
        }
        
</style>