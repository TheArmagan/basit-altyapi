module.exports = new (require("../types/Event"))({
  // Event idsi. Opsiyonel, boş bırakıldığında dosya ismini alır.
  // Boşluk içeremez.
  id: "örnekOlay",
  // Herhangi bir discord.js olay ismi.
  eventName: "messageCreate",
  // onEvent belirtiğiniz olay yaşandığında çağrılır.
  // Komut argumentlari normal discord.js'deki gibi ideğişkendir.
  // Otomatik tamamlama eventName değişkenindeki tipe göre değişir.
  onEvent(message) {
    console.log(`[MESAJ] ${message.author.tag}: ${message.content}`);
  },
  // Olay çalışmaya hazır olduğunda bot açılırken
  // sadece bir kereliğine çağrılır. Opsiyonel
  onLoad(client) {
    // Normal discord.js client objesi.
    client;
  },
  // Event açıkmı kapalı mı?
  // Opsiyonel. Varsayılan değer false.
  disabled: false
});