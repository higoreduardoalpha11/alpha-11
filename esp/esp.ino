#include "WiFi.h"
#include "AsyncUDP.h"
#include "secrets.h"

const char * ssid = SECRET_SSID;
const char * password = SECRET_PASS;
const int port = 1234;

const int light = 23;
const int fan = 22;
const int servo = 21;
const int dht22 = 19;
const int mq131 = 18;

AsyncUDP udp;

void setup()
{
    Serial.begin(115200);
    connect();
    config();
}

void loop()
{
    threeWayHandShake();
    delay(1000);
    //Send broadcast
    udp.broadcast("Anyone here?");
}

void config() {
  pinMode(light, OUTPUT);
  pinMode(fan, OUTPUT);
  pinMode(servo, OUTPUT);

  pinMode(dht22, INPUT);
  pinMode(mq131, INPUT);
}

void connect() {
  WiFi.mode(WIFI_STA);
    WiFi.begin(ssid, password);
    if (WiFi.waitForConnectResult() != WL_CONNECTED) {
        Serial.println("WiFi Failed");
        while(1) {
            delay(1000);
        }
    }
}

void threeWayHandShake() {
  if(udp.listen(port)) {
      Serial.print("UDP Listening on IP: ");
      Serial.println(WiFi.localIP());
      udp.onPacket([](AsyncUDPPacket packet) {
          Serial.print("UDP Packet Type: ");
          Serial.print(packet.isBroadcast()?"Broadcast":packet.isMulticast()?"Multicast":"Unicast");
          Serial.print(", From: ");
          Serial.print(packet.remoteIP());
          Serial.print(":");
          Serial.print(packet.remotePort());
          Serial.print(", To: ");
          Serial.print(packet.localIP());
          Serial.print(":");
          Serial.print(packet.localPort());
          Serial.print(", Length: ");
          Serial.print(packet.length());
          Serial.print(", Data: ");
          Serial.write(packet.data(), packet.length());
          Serial.println();
          //reply to the client
          packet.printf("Got %u bytes of data", packet.length());
      });
  }
}