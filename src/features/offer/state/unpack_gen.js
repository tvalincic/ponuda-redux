// Code generated by go generate; DO NOT EDIT.

function unpack(o) {
  function unpackStat(o) {
    if (o["S"] !== undefined) {
      o["sportovi"] = o["S"];
      delete o["S"];
    }
    for (let k in o["sportovi"]) {
      let c = o["sportovi"][k];
      if (c !== null) {
        unpackSport(c);
      }
    }
    if (o["he"] !== undefined) {
      o["heartbeat"] = o["he"];
      delete o["he"];
    }
    for (let k in o["heartbeat"]) {
      let c = o["heartbeat"][k];
      if (c !== null) {
        unpackHeartbeat(c);
      }
    }
  }

  function unpackSport(o) {
    if (o["n"] !== undefined) {
      o["naziv"] = o["n"];
      delete o["n"];
    }
    if (o["po"] !== undefined) {
      o["poredak"] = o["po"];
      delete o["po"];
    }
    if (o["do"] !== undefined) {
      o["dogadjaji"] = o["do"];
      delete o["do"];
    }
    for (let k in o["dogadjaji"]) {
      let c = o["dogadjaji"][k];
      if (c !== null) {
        unpackDogadjaj(c);
      }
    }
  }

  function unpackDogadjaj(o) {
    if (o["i"] !== undefined) {
      o["id"] = o["i"];
      delete o["i"];
    }
    if (o["c"] !== undefined) {
      o["sport"] = o["c"];
      delete o["c"];
    }
    if (o["a"] !== undefined) {
      o["regija"] = o["a"];
      delete o["a"];
    }
    if (o["l"] !== undefined) {
      o["liga"] = o["l"];
      delete o["l"];
    }
    if (o["d"] !== undefined) {
      o["domacin"] = o["d"];
      delete o["d"];
    }
    if (o["g"] !== undefined) {
      o["gost"] = o["g"];
      delete o["g"];
    }
    if (o["v"] !== undefined) {
      o["vrijeme"] = o["v"];
      delete o["v"];
    }
    if (o["s"] !== undefined) {
      o["stanje"] = o["s"];
      delete o["s"];
    }
    if (o["so"] !== undefined) {
      o["stopirano"] = o["so"];
      delete o["so"];
    }
    if (o["sk"] !== undefined) {
      o["skriveno"] = o["sk"];
      delete o["sk"];
    }
    if (o["si"] !== undefined) {
      o["sportId"] = o["si"];
      delete o["si"];
    }
    if (o["tv"] !== undefined) {
      o["tvKanal"] = o["tv"];
      delete o["tv"];
    }
    if (o["vi"] !== undefined) {
      o["videoId"] = o["vi"];
      delete o["vi"];
    }
    if (o["k"] !== undefined) {
      o["kartoni"] = o["k"];
      delete o["k"];
    }
    if (o["sd"] !== undefined) {
      o["sportradarId"] = o["sd"];
      delete o["sd"];
    }
    if (o["b"] !== undefined) {
      o["baseId"] = o["b"];
      delete o["b"];
    }
    if (o["bl"] !== undefined) {
      o["baseLigaId"] = o["bl"];
      delete o["bl"];
    }
    if (o["bn"] !== undefined) {
      o["baseLigaNaziv"] = o["bn"];
      delete o["bn"];
    }
    if (o["bg"] !== undefined) {
      o["baseLigaGrupaId"] = o["bg"];
      delete o["bg"];
    }
    if (o["bu"] !== undefined) {
      o["baseLigaGrupaNaziv"] = o["bu"];
      delete o["bu"];
    }
    if (o["ip"] !== undefined) {
      o["imaSpecijal"] = o["ip"];
      delete o["ip"];
    }
    if (o["gi"] !== undefined) {
      o["eSportId"] = o["gi"];
      delete o["gi"];
    }
    if (o["mp"] !== undefined) {
      o["medPrekid"] = o["mp"];
      delete o["mp"];
    }
    if (o["po"] !== undefined) {
      o["poredak"] = o["po"];
      delete o["po"];
    }
    if (o["bp"] !== undefined) {
      o["brojPonuda"] = o["bp"];
      delete o["bp"];
    }
    if (o["pl"] !== undefined) {
      o["plazma"] = o["pl"];
      delete o["pl"];
    }
    if (o["p2"] !== undefined) {
      o["plazma2"] = o["p2"];
      delete o["p2"];
    }
    if (o["br"] !== undefined) {
      o["broj"] = o["br"];
      delete o["br"];
    }
    if (o["uk"] !== undefined) {
      o["uplataLimitKoeficijent"] = o["uk"];
      delete o["uk"];
    }
    if (o["z"] !== undefined) {
      o["zadrska"] = o["z"];
      delete o["z"];
    }
    if (o["sr"] !== undefined) {
      o["stopiranoKorner"] = o["sr"];
      delete o["sr"];
    }
    if (o["sv"] !== undefined) {
      o["stopiranoIzvor"] = o["sv"];
      delete o["sv"];
    }
    if (o["ul"] !== undefined) {
      o["ulog"] = o["ul"];
      delete o["ul"];
    }
    if (o["li"] !== undefined) {
      o["listica"] = o["li"];
      delete o["li"];
    }
    if (o["ui"] !== undefined) {
      o["ulogInterval"] = o["ui"];
      delete o["ui"];
    }
    if (o["iz"] !== undefined) {
      o["izvor"] = o["iz"];
      delete o["iz"];
    }
    if (o["is"] !== undefined) {
      o["istaknut"] = o["is"];
      delete o["is"];
    }
    if (o["p"] !== undefined) {
      o["ponude"] = o["p"];
      delete o["p"];
    }
    for (let k in o["ponude"]) {
      let c = o["ponude"][k];
      if (c !== null) {
        unpackPonuda(c);
      }
    }
    if (o["tl"] !== undefined) {
      o["timeline"] = o["tl"];
      delete o["tl"];
    }
    for (let k in o["timeline"]) {
      let c = o["timeline"][k];
      if (c !== null) {
        unpackTimeline(c);
      }
    }
    if (o["r"] !== undefined) {
      o["rezultat"] = o["r"];
      delete o["r"];
    }
    var s = o["rezultat"];
    if (s !== undefined && Object.keys(s).length > 0) {
      s["_isStruct"] = 1;
      unpackRezultat(s);
    }
    if (o["ps"] !== undefined) {
      o["poslovnice"] = o["ps"];
      delete o["ps"];
    }
    s = o["poslovnice"];
    if (s !== undefined && Object.keys(s).length > 0) {
      s["_isStruct"] = 1;
      unpackPoslovnice(s);
    }
    s = o["en"];
    if (s !== undefined && Object.keys(s).length > 0) {
      s["_isStruct"] = 1;
      unpackEn(s);
    }
    if (o["f"] !== undefined) {
      o["betbuilderId"] = o["f"];
      delete o["f"];
    }
    if (o["cf"] !== undefined) {
      o["betbuilderConsumerId"] = o["cf"];
      delete o["cf"];
    }
  }

  function unpackPonuda(o) {
    if (o["i"] !== undefined) {
      o["id"] = o["i"];
      delete o["i"];
    }
    if (o["s"] !== undefined) {
      o["stanje"] = o["s"];
      delete o["s"];
    }
    if (o["n"] !== undefined) {
      o["naziv"] = o["n"];
      delete o["n"];
    }
    if (o["po"] !== undefined) {
      o["poredak"] = o["po"];
      delete o["po"];
    }
    if (o["o"] !== undefined) {
      o["osnovna"] = o["o"];
      delete o["o"];
    }
    if (o["ss"] !== undefined) {
      o["stopiranoStatistika"] = o["ss"];
      delete o["ss"];
    }
    if (o["sr"] !== undefined) {
      o["stopiranoKorner"] = o["sr"];
      delete o["sr"];
    }
    if (o["ul"] !== undefined) {
      o["ulog"] = o["ul"];
      delete o["ul"];
    }
    if (o["li"] !== undefined) {
      o["listica"] = o["li"];
      delete o["li"];
    }
    if (o["ui"] !== undefined) {
      o["ulogInterval"] = o["ui"];
      delete o["ui"];
    }
    if (o["sn"] !== undefined) {
      o["sportPanel"] = o["sn"];
      delete o["sn"];
    }
    if (o["nn"] !== undefined) {
      o["nazivPanel"] = o["nn"];
      delete o["nn"];
    }
    if (o["br"] !== undefined) {
      o["broj"] = o["br"];
      delete o["br"];
    }
    if (o["np"] !== undefined) {
      o["nazivPlazma"] = o["np"];
      delete o["np"];
    }
    if (o["nb"] !== undefined) {
      o["nazivBlagajne"] = o["nb"];
      delete o["nb"];
    }
    if (o["ti"] !== undefined) {
      o["tecajevi"] = o["ti"];
      delete o["ti"];
    }
    for (let k in o["tecajevi"]) {
      let c = o["tecajevi"][k];
      if (c !== null) {
        unpackTecaj(c);
      }
    }
    if (o["ra"] !== undefined) {
      o["razrada"] = o["ra"];
      delete o["ra"];
    }
    var s = o["razrada"];
    if (s !== undefined && Object.keys(s).length > 0) {
      s["_isStruct"] = 1;
      unpackRazrada(s);
    }
  }

  function unpackTecaj(o) {
    if (o["i"] !== undefined) {
      o["id"] = o["i"];
      delete o["i"];
    }
    if (o["n"] !== undefined) {
      o["naziv"] = o["n"];
      delete o["n"];
    }
    if (o["t"] !== undefined) {
      o["tecaj"] = o["t"];
      delete o["t"];
    }
    if (o["po"] !== undefined) {
      o["poredak"] = o["po"];
      delete o["po"];
    }
    if (o["sf"] !== undefined) {
      o["sifra"] = o["sf"];
      delete o["sf"];
    }
    if (o["ul"] !== undefined) {
      o["ulog"] = o["ul"];
      delete o["ul"];
    }
    if (o["li"] !== undefined) {
      o["listica"] = o["li"];
      delete o["li"];
    }
    if (o["ui"] !== undefined) {
      o["ulogInterval"] = o["ui"];
      delete o["ui"];
    }
  }

  function unpackRazrada(o) {
    if (o["i"] !== undefined) {
      o["id"] = o["i"];
      delete o["i"];
    }
    if (o["gr"] !== undefined) {
      o["grupe"] = o["gr"];
      delete o["gr"];
    }
    if (o["os"] !== undefined) {
      o["ostalo"] = o["os"];
      delete o["os"];
    }
  }

  function unpackTimeline(o) {
    if (o["tp"] !== undefined) {
      o["tip"] = o["tp"];
      delete o["tp"];
    }
    if (o["tm"] !== undefined) {
      o["tim"] = o["tm"];
      delete o["tm"];
    }
    if (o["m"] !== undefined) {
      o["minuta"] = o["m"];
      delete o["m"];
    }
    if (o["r"] !== undefined) {
      o["rezultat"] = o["r"];
      delete o["r"];
    }
    if (o["ig"] !== undefined) {
      o["igrac"] = o["ig"];
      delete o["ig"];
    }
  }

  function unpackRezultat(o) {
    if (o["pr"] !== undefined) {
      o["progres"] = o["pr"];
      delete o["pr"];
    }
    if (o["pe"] !== undefined) {
      o["period"] = o["pe"];
      delete o["pe"];
    }
    if (o["pk"] !== undefined) {
      o["prekid"] = o["pk"];
      delete o["pk"];
    }
    if (o["pi"] !== undefined) {
      o["periodi"] = o["pi"];
      delete o["pi"];
    }
    if (o["u"] !== undefined) {
      o["ukupno"] = o["u"];
      delete o["u"];
    }
    if (o["se"] !== undefined) {
      o["server"] = o["se"];
      delete o["se"];
    }
    if (o["le"] !== undefined) {
      o["leg"] = o["le"];
      delete o["le"];
    }
    if (o["th"] !== undefined) {
      o["throw"] = o["th"];
      delete o["th"];
    }
    if (o["ty"] !== undefined) {
      o["try"] = o["ty"];
      delete o["ty"];
    }
    if (o["ya"] !== undefined) {
      o["yards"] = o["ya"];
      delete o["ya"];
    }
    if (o["ab"] !== undefined) {
      o["awaybatter"] = o["ab"];
      delete o["ab"];
    }
    if (o["hb"] !== undefined) {
      o["homebatter"] = o["hb"];
      delete o["hb"];
    }
    if (o["ba"] !== undefined) {
      o["balls"] = o["ba"];
      delete o["ba"];
    }
    if (o["ou"] !== undefined) {
      o["outs"] = o["ou"];
      delete o["ou"];
    }
    if (o["st"] !== undefined) {
      o["strikes"] = o["st"];
      delete o["st"];
    }
    if (o["bs"] !== undefined) {
      o["bases"] = o["bs"];
      delete o["bs"];
    }
    if (o["kz"] !== undefined) {
      o["kazne"] = o["kz"];
      delete o["kz"];
    }
    if (o["kn"] !== undefined) {
      o["korneri"] = o["kn"];
      delete o["kn"];
    }
    if (o["pn"] !== undefined) {
      o["poeni"] = o["pn"];
      delete o["pn"];
    }
    if (o["ct"] !== undefined) {
      o["currentCtTeam"] = o["ct"];
      delete o["ct"];
    }
    if (o["rn"] !== undefined) {
      o["roundNumber"] = o["rn"];
      delete o["rn"];
    }
    if (o["mn"] !== undefined) {
      o["mapName"] = o["mn"];
      delete o["mn"];
    }
    if (o["er"] !== undefined) {
      o["esportRezultati"] = o["er"];
      delete o["er"];
    }
    for (let k in o["esportRezultati"]) {
      let c = o["esportRezultati"][k];
      if (c !== null) {
        unpackEsportRezultat(c);
      }
    }
  }

  function unpackEsportRezultat(o) {
    if (o["n"] !== undefined) {
      o["naziv"] = o["n"];
      delete o["n"];
    }
    if (o["d"] !== undefined) {
      o["domacin"] = o["d"];
      delete o["d"];
    }
    if (o["g"] !== undefined) {
      o["gost"] = o["g"];
      delete o["g"];
    }
  }

  function unpackPoslovnice(o) {
    if (o["pl"] !== undefined) {
      o["plazma"] = o["pl"];
      delete o["pl"];
    }
    if (o["p2"] !== undefined) {
      o["plazma2"] = o["p2"];
      delete o["p2"];
    }
    if (o["br"] !== undefined) {
      o["broj"] = o["br"];
      delete o["br"];
    }
  }

  function unpackEn(o) {
    if (o["l"] !== undefined) {
      o["liga"] = o["l"];
      delete o["l"];
    }
    if (o["d"] !== undefined) {
      o["domacin"] = o["d"];
      delete o["d"];
    }
    if (o["g"] !== undefined) {
      o["gost"] = o["g"];
      delete o["g"];
    }
  }

  function unpackHeartbeat(o) {}

  unpackStat(o);
}

export default unpack;
