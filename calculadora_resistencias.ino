#include <Servo.h>
#include <NewPing.h>

// Crear objetos para servo y sensor
Servo miServo;
NewPing sonar(triggerPin, echoPin, 200); // Máximo 200cm

// Pines del hardware
int servoPin = 9;
int triggerPin = 7;
int echoPin = 8;
int ledRojo = 3;
int ledVerde = 4;
int buzzerPin = 5;

// Variables del sensor
int distancia = 0;
int distanciaLimite = 20;    // 20cm para detectar barco

// Variables de control
bool puenteArriba = false;
unsigned long tiempoEspera = 0;
int tiempoDelay = 3000;      // 3 segundos de espera

void setup(){
  // Configurar pines como OUTPUT o INPUT
    pinMode(ledRojo, OUTPUT);
    pinMode(ledVerde, OUTPUT);
    pinMode(buzzerPin, OUTPUT);

  // Inicializar servo
    miServo.attach(servoPin);
  miServo.write(0); // Posición inicial (puente abajo)

  // Inicializar comunicación serie
    Serial.begin(9600);
    Serial.println("=== Puente Elevadizo Iniciado ===");

  // Estado inicial
  digitalWrite(ledVerde, HIGH);  // Puente abajo = luz verde
    digitalWrite(ledRojo, LOW);
}

void loop(){
  // Leer distancia del sensor ultrasónico
    distancia = sonar.ping_cm();

  // Si no detecta nada, ping_cm() devuelve 0, asignar valor alto
    if(distancia == 0) {
    distancia = 999; // Valor alto para indicar "no hay objeto"
    }

  // Mostrar distancia en monitor serie
    Serial.print("Distancia: ");
    Serial.print(distancia);
    Serial.println(" cm");

  // LÓGICA PRINCIPAL: Detectar si hay barco
    if(distancia <= distanciaLimite && !puenteArriba) {
    // HAY BARCO Y PUENTE ESTÁ ABAJO → SUBIR PUENTE
    Serial.println("¡BARCO DETECTADO! Subiendo puente...");
    subirPuente();
    puenteArriba = true;
    tiempoEspera = millis(); // Guardar tiempo actual
    
    } else if(distancia > distanciaLimite && puenteArriba) {
    // NO HAY BARCO Y PUENTE ESTÁ ARRIBA → ESPERAR Y BAJAR
    if(millis() - tiempoEspera >= tiempoDelay) {
        Serial.println("Barco pasó. Bajando puente...");
        bajarPuente();
        puenteArriba = false;
    } else {
      // Mostrar tiempo restante de espera
        unsigned long tiempoRestante = tiempoDelay - (millis() - tiempoEspera);
        Serial.print("Esperando... ");
        Serial.print(tiempoRestante / 1000);
        Serial.println(" segundos");
    }
}
 
  delay(500); // Leer sensor cada 0.5 segundos
}

// Función para subir el puente
void subirPuente() {
  // Mover servo gradualmente de 0° a 90°
    for(int pos = 0; pos <= 90; pos++) {
    miServo.write(pos);
    delay(15); // Movimiento suave
}

  // Encender LED rojo y apagar verde
digitalWrite(ledRojo, HIGH);
digitalWrite(ledVerde, LOW);

  // Sonar buzzer 3 veces
for(int i = 0; i < 3; i++) {
    digitalWrite(buzzerPin, HIGH);
    delay(200);
    digitalWrite(buzzerPin, LOW);
    delay(200);
}

Serial.println("✅ Puente ARRIBA - Paso libre para barcos");
}

// Función para bajar el puente
void bajarPuente() {
  // Sonar buzzer 2 veces (diferente al subir)
    for(int i = 0; i < 2; i++) {
        digitalWrite(buzzerPin, HIGH);
        delay(300);
        digitalWrite(buzzerPin, LOW);
        delay(300);
    }

  // Mover servo gradualmente de 90° a 0°
    for(int pos = 90; pos >= 0; pos--) {
        miServo.write(pos);
        delay(15); // Movimiento suave
    }

  // Encender LED verde y apagar rojo
    digitalWrite(ledVerde, HIGH);
    digitalWrite(ledRojo, LOW);

    Serial.println("✅ Puente ABAJO - Paso libre para vehículos");
}