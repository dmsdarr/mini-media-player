// Add additional languages with their ISO 639-1 language code

const translations = {
  en: {
    placeholder: {
      tts: 'Text to speech',
    },
    label: {
      leave: 'Leave',
      ungroup: 'Ungroup',
      group_all: 'Group all',
      send: 'Send',
      master: 'Master',
    },
    state: {
      idle: 'Idle',
      unavailable: 'Unavailable',
    },
    title: {
      speaker_management: 'Group management',
    },
  },
  de: {
    placeholder: {
      tts: 'Text zum Sprechen',
    },
    label: {
      leave: 'Verlassen',
      ungroup: 'Teilen',
      group_all: 'Gruppieren',
      send: 'Senden',
      master: 'Master',
    },
    state: {
      idle: 'Pause',
      unavailable: 'Nicht verfügbar',
    },
    title: {
      speaker_management: 'Wiedergabe auf',
    },
  },
  fi: {
      placeholder: {
          tts: 'Teksti puheeksi',
      },
      label: {
          leave: 'Jätä',
          ungroup: 'Pura ryhmä',
          group_all: 'Liitä kaikki',
          send: 'Lähetä',
          master: 'Master',
      },
      state: {
          idle: 'Tauko',
          unavailable: 'Ei käytettävissä',
      },
      title: {
          speaker_management: 'Ryhmän hallinta',
      },
  },
  fr: {
    placeholder: {
      tts: 'Texte à lire',
    },
    label: {
      leave: 'Quitter',
      ungroup: 'Dégrouper',
      group_all: 'Grouper tous',
      send: 'Envoyer',
    },
    state: {
      idle: 'Inactif',
      unavailable: 'Indisponible',
    },
    title: {
      speaker_management: 'Gestion des groupes',
    },
  },
  hu: {
    placeholder: {
      tts: 'Szövegfelolvasás',
    },
    label: {
      leave: 'Kilépés',
      ungroup: 'Összes ki',
      group_all: 'Összes be',
      send: 'Küldés',
      master: 'Forrás',
    },
    state: {
      idle: 'Tétlen',
      unavailable: 'Nem elérhető',
    },
    title: {
      speaker_management: 'Hangszórók csoportosítása',
    },
  },
  is: {
    placeholder: {
      tts: 'Texti sem á að segja',
    },
    label: {
      leave: 'Yfirgefa',
      ungroup: 'Aðskilja',
      group_all: 'Sameina alla',
      send: 'Senda',
      master: 'Stjórnandi',
    },
    state: {
      idle: 'Aðgerðalaus',
      unavailable: 'Ekki tiltækt',
    },
    title: {
      speaker_management: 'Stjórnun hópa',
    },
  },
  no: {
    placeholder: {
      tts: 'Tekst til tale',
    },
    label: {
      leave: 'Forlat',
      ungroup: 'Oppløs gruppe',
      group_all: 'Grupper alle',
      send: 'Send',
      master: 'Master',
    },
    state: {
      idle: 'Inaktiv',
      unavailable: 'Utilgjengelig',
    },
    title: {
      speaker_management: 'Gruppestyring',
    },
  },
  pl: {
    placeholder: {
      tts: 'Zamień tekst na mowę',
    },
    label: {
      leave: 'Opuść',
      ungroup: 'Usuń grupę',
      group_all: 'Grupuj wszystkie',
      send: 'Wyślij',
    },
    state: {
      idle: 'brak aktywności',
      unavailable: 'niedostępny',
    },
    title: {
      speaker_management: 'Zarządzanie grupą',
    },
  },
  sv: {
    placeholder: {
      tts: 'Text till tal',
    },
    label: {
      leave: 'Lämna',
      ungroup: 'Avgruppera',
      group_all: 'Gruppera alla',
      send: 'Skicka',
      master: 'Master',
    },
    state: {
      idle: "Inaktiv",
      unavailable: 'Otillgänglig',
    },
    title: {
      speaker_management: 'Gruppstyrning',
    }
  },
  uk: {
    placeholder: {
      tts: 'Текст для відтворення',
    },
    label: {
      leave: 'Залишити',
      ungroup: 'Розгрупувати',
      group_all: 'Згрупувати всі',
      send: 'Надіслати',
      master: 'Головний',
    },
    state: {
      idle: 'бездіяльність',
      unavailable: 'недоступний',
    },
    title: {
      speaker_management: 'Управління групою',
    },
  },
  cz: {
    placeholder: {
      tts: 'Převeď text na řeč',
    },
    label: {
      leave: 'Odejít',
      ungroup: 'Zrušit seskupení',
      group_all: 'Seskupit vše',
      send: 'Poslat',
      master: 'Master',
    },
    state: {
      idle: 'Nečinný',
      unavailable: 'Nedostupný',
    },
    title: {
      speaker_management: 'Správa skupin',
    },
  },
  ru: {
    placeholder: {
      tts: 'Преобразование текста в речь',
    },
    label: {
      leave: 'Покинуть',
      ungroup: 'Разгруппировать',
      group_all: 'Сгруппировать все',
      send: 'Отправить',
      master: 'Мастер',
    },
    state: {
      idle: 'Бездействие',
      unavailable: 'Недоступен',
    },
    title: {
      speaker_management: 'Управление группой',
    },
  },
  es: {
    placeholder: {
      tts: 'Texto a voz',
    },
    label: {
      leave: 'Salir',
      ungroup: 'Desagrupar',
      group_all: 'Agrupar todos',
      send: 'Enviar',
      master: 'Maestro',
    },
    state: {
      idle: 'Inactivo',
      unavailable: 'No disponible',
    },
    title: {
      speaker_management: 'Gestión de grupo',
    },
  },
  zh: {
    placeholder: {
      tts: '播放文本',
    },
    label: {
      leave: '退出',
      ungroup: '取消组合',
      group_all: '组合全部',
      send: '发送',
      master: '主要的',
    },
    state: {
      idle: '空闲',
      unavailable: '不可用',
    },
    title: {
      speaker_management: '组合管理',
    },
  },
  ca: {
    placeholder: {
      tts: 'Text a veu',
    },
    label: {
      leave: 'Sortir',
      ungroup: 'Desagrupar',
      group_all: 'Agrupar-los tots',
      send: 'Enviar',
      master: 'Mestre',
    },
    state: {
      idle: 'Inactiu',
      unavailable: 'No disponible',
    },
    title: {
      speaker_management: 'Gestió del grup',
    },
  },
  nl: {
    placeholder: {
      tts: 'Tekst naar spraak',
    },
    label: {
      leave: 'Verlaten',
      ungroup: 'Ontgroeperen',
      group_all: 'Alles groeperen',
      send: 'Verzenden',
      master: 'Master',
    },
    state: {
      idle: 'Inactief',
      unavailable: 'Niet beschikbaar',
    },
    title: {
      speaker_management: 'Groepsbeheer',
    },
  },
};

export default translations;
