package com.solera.myapplication2

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.solera.myapplication2.databinding.ActivityMain2Binding
import com.solera.myapplication2.databinding.ActivityMainBinding

class MainActivity3 : AppCompatActivity() {

    // Declarar "binding" para que inicie "despues"
    private lateinit var binding: ActivityMain2Binding

    // Fase "onCreate" para la pantalla
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Tomar todos los elementos del layout para crearlos como objetos
        binding = ActivityMain2Binding.inflate(layoutInflater)
        setContentView(binding.root)

        // Accion que se va a iniciar en esta nueva pantalla:
        binding.textView2.text = "Se logro! (Ahora si)"
    }
}