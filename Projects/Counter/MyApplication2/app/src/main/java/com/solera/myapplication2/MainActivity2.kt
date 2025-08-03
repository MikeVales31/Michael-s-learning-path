package com.solera.myapplication2

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.solera.myapplication2.databinding.ActivityMainBinding

// Esta clase no funciona para la aplicación porque no se creo correctamente.
// Lo correcto es:
// Click derecho paquete → new → Activity → empty views activity (pantalla blanco)
// Esto crea el Layout automaticamente.

class MainActivity2 : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.textView1.text = "Se logro!"
    }
}