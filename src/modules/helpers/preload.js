const birdsImages = [
  'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
  'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
  'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
  'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
  'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
  'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
  'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
  'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
  'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
  'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
  'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
  'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
  'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
  'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
  'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
  'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
  'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
  'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
  'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
  'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
  'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
  'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
  'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
  'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
  'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
  'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
  'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
  'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
  'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
  'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
  'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
  'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
  'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
  'https://live.staticflickr.com/65535/49159147156_dcbbb5c12a.jpg',
  'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
  'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
];

const birdsVoices = [
  'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3',
  'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3',
  'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
];

export function preloadImages () {
  const img = document.createElement('img');
  
  birdsImages.forEach(elem => {
    img.src = elem;
  });
}

export function preloadVoises() {
  const audio = document.createElement('audio');
  
  birdsVoices.forEach(elem => {
    audio.preload = 'auto';
    audio.src = elem;
  });
}
