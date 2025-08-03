package com.solera.myapplication2

import android.content.Intent
import android.os.Bundle
import android.util.Log
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import com.solera.myapplication2.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    //M3
    private val viewModel:ContadorViewModel by viewModels ()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding=ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        //M3, Funcion lamda
        viewModel.contador.observe(this){ valor ->
            binding.textView1.text="Contador: $valor"
        }

        //M3, P4
        val usuario = Usuario ("Nadia",27)
        Log.d("App",usuario.presentarse())

        //Modulo 3, paso 2, se onserva en el "Logcat"
        Log.d("App", saludar("Ivette"))

        // M2 antes, se necesita descomentar y comentar M3.
        binding.buttonInicio.setOnClickListener {
            /*val intent = Intent(this, MainActivity3::class.java)
            startActivity(intent)*/

            binding.buttonInicio.setOnClickListener {
                viewModel.incremento()
            }

        }
    }
    //Modulo 3, paso 1
    fun saludar (nombre:String): String{
        return "hola, $nombre"
    }
    }