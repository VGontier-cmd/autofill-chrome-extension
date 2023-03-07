var countrySelect = document.getElementById('fill-country')
var stateSelect = document.getElementById('fill-state')

countrySelect.onchange = function onChangeCountry() {
    displayStates(countrySelect.options[countrySelect.selectedIndex].value)
}



function displayStates(country) {
    stateSelect.innerHTML = `
    <option value="No state" selected="selected">No state</option>`;
    console.log(country)
    switch (country) {
        case "Russia":
            stateSelect.innerHTML += `
            <option disabled> ------ Russia Regions ------</option>
            <option value="ALT">Altai Krai</option>
            <option value="AL">Altai Republic</option>
            <option value="AMU">Amur Oblast</option>
            <option value="ARK">Arkhangelsk Oblast</option>
            <option value="AST">Astrakhan Oblast</option>
            <option value="BEL">Belgorod Oblast</option>
            <option value="BRY">Bryansk Oblast</option>
            <option value="CE">Chechen Republic</option>
            <option value="CHE">Chelyabinsk Oblast</option>
            <option value="CHU">Chukotka Autonomous Okrug</option>
            <option value="CU">Chuvash Republic</option>
            <option value="IRK">Irkutsk Oblast</option>
            <option value="IVA">Ivanovo Oblast</option>
            <option value="YEV">Jewish Autonomous Oblast</option>
            <option value="KB">Kabardino-Balkarian Republic</option>
            <option value="KGD">Kaliningrad Oblast</option>
            <option value="KLU">Kaluga Oblast</option>
            <option value="KAM">Kamchatka Krai</option>
            <option value="KC">Karachay–Cherkess Republic</option>
            <option value="KEM">Kemerovo Oblast</option>
            <option value="KHA">Khabarovsk Krai</option>
            <option value="KHM">Khanty-Mansi Autonomous Okrug</option>
            <option value="KIR">Kirov Oblast</option>
            <option value="KO">Komi Republic
            </option>
            <option value="KOS">Kostroma Oblast</option>
            <option value="KDA">Krasnodar Krai</option>
            <option value="KYA">Krasnoyarsk Krai</option>
            <option value="KGN">Kurgan Oblast</option>
            <option value="KRS">Kursk Oblast</option>
            <option value="LEN">Leningrad Oblast</option>
            <option value="LIP">Lipetsk Oblast</option>
            <option value="MAG">Magadan Oblast</option>
            <option value="ME">Mari El Republic</option>
            <option value="MOW">Moscow</option>
            <option value="MOS">Moscow Oblast</option>
            <option value="MUR">Murmansk Oblast</option>
            <option value="NIZ">Nizhny Novgorod Oblast</option>
            <option value="NGR">Novgorod Oblast</option>
            <option value="NVS">Novosibirsk Oblast</option>
            <option value="OMS">Omsk Oblast
            </option>
            <option value="ORE">Orenburg Oblast</option>
            <option value="ORL">Oryol Oblast
            </option>
            <option value="PNZ">Penza Oblast
            </option>
            <option value="PER">Perm Krai</option>
            <option value="PRI">Primorsky Krai
            </option>
            <option value="PSK">Pskov Oblast
            </option>
            <option value="AD">Republic of Adygeya</option>
            <option value="BA">Republic of Bashkortostan</option>
            <option value="BU">Republic of Buryatia</option>
            <option value="DA">Republic of Dagestan</option>
            <option value="IN">Republic of Ingushetia</option>
            <option value="KL">Republic of Kalmykia</option>
            <option value="KR">Republic of Karelia</option>
            <option value="KK">Republic of Khakassia</option>
            <option value="MO">Republic of Mordovia</option>
            <option value="SE">Republic of North Ossetia–Alania</option>
            <option value="TA">Republic of Tatarstan</option>
            <option value="ROS">Rostov Oblast
            </option>
            <option value="RYA">Ryazan Oblast
            </option>
            <option value="SPE">Saint Petersburg</option>
            <option value="SA">Sakha Republic (Yakutia)</option>
            <option value="SAK">Sakhalin Oblast</option>
            <option value="SAM">Samara Oblast
            </option>
            <option value="SAR">Saratov Oblast
            </option>
            <option value="SMO">Smolensk Oblast</option>
            <option value="STA">Stavropol Krai
            </option>
            <option value="SVE">Sverdlovsk Oblast</option>
            <option value="TAM">Tambov Oblast
            </option>
            <option value="TOM">Tomsk Oblast
            </option>
            <option value="TUL">Tula Oblast
            </option>
            <option value="TVE">Tver Oblast
            </option>
            <option value="TYU">Tyumen Oblast
            </option>
            <option value="TY">Tyva Republic
            </option>
            <option value="UD">Udmurtia</option>
            <option value="ULY">Ulyanovsk Oblast</option>
            <option value="VLA">Vladimir Oblast</option>
            <option value="VGG">Volgograd Oblast</option>
            <option value="VLG">Vologda Oblast
            </option>
            <option value="VOR">Voronezh Oblast</option>
            <option value="YAN">Yamalo-Nenets Autonomous Okrug</option>
            <option value="YAR">Yaroslavl Oblast</option>
            <option value="ZAB">Zabaykalsky Krai</option>`
            break;
        case "Italy":
            stateSelect.innerHTML += `
            <option disabled> ------ Italy Provinces ------</option>
            <option value="AG" selected="selected">Agrigento</option>
            <option value="AL">Alessandria</option>
            <option value="AN">Ancona</option>
            <option value="AO">Aosta</option>
            <option value="AR">Arezzo</option>
            <option value="AP">Ascoli Piceno</option>
            <option value="AT">Asti</option>
            <option value="AV">Avellino</option>
            <option value="BA">Bari</option>
            <option value="BT">Barletta-Andria-Trani</option>
            <option value="BL">Belluno</option>
            <option value="BN">Benevento</option>
            <option value="BG">Bergamo</option>
            <option value="BI">Biella</option>
            <option value="BO">Bologna</option>
            <option value="BZ">Bolzano</option>
            <option value="BS">Brescia</option>
            <option value="BR">Brindisi</option>
            <option value="CA">Cagliari</option>
            <option value="CL">Caltanissetta</option>
            <option value="CB">Campobasso</option>
            <option value="CI">Carbonia-Iglesias</option>
            <option value="CE">Caserta</option>
            <option value="CT">Catania</option>
            <option value="CZ">Catanzaro</option>
            <option value="CH">Chieti</option>
            <option value="CO">Como</option>
            <option value="CS">Cosenza</option>
            <option value="CR">Cremona</option>
            <option value="KR">Crotone</option>
            <option value="CN">Cuneo</option>
            <option value="EN">Enna</option>
            <option value="FM">Fermo</option>
            <option value="FE">Ferrara</option>
            <option value="FI">Firenze</option>
            <option value="FG">Foggia</option>
            <option value="FC">Forlì-Cesena</option>
            <option value="FR">Frosinone</option>
            <option value="GE">Genova</option>
            <option value="GO">Gorizia</option>
            <option value="GR">Grosseto</option>
            <option value="IM">Imperia</option>
            <option value="IS">Isernia</option>
            <option value="AQ">L'Aquila</option>
            <option value="SP">La Spezia</option>
            <option value="LT">Latina</option>
            <option value="LE">Lecce</option>
            <option value="LC">Lecco</option>
            <option value="LI">Livorno</option>
            <option value="LO">Lodi</option>
            <option value="LU">Lucca</option>
            <option value="MC">Macerata</option>
            <option value="MN">Mantova</option>
            <option value="MS">Massa-Carrara</option>
            <option value="MT">Matera</option>
            <option value="VS">Medio Campidano</option>
            <option value="ME">Messina</option>
            <option value="MI">Milano</option>
            <option value="MO">Modena</option>
            <option value="MB">Monza e Brianza</option>
            <option value="NA">Napoli</option>
            <option value="NO">Novara</option>
            <option value="NU">Nuoro</option>
            <option value="OG">Ogliastra</option>
            <option value="OT">Olbia-Tempio</option>
            <option value="OR">Oristano</option>
            <option value="PD">Padova</option>
            <option value="PA">Palermo</option>
            <option value="PR">Parma</option>
            <option value="PV">Pavia</option>
            <option value="PG">Perugia</option>
            <option value="PU">Pesaro e Urbino</option>
            <option value="PE">Pescara</option>
            <option value="PC">Piacenza</option>
            <option value="PI">Pisa</option>
            <option value="PT">Pistoia</option>
            <option value="PN">Pordenone</option>
            <option value="PZ">Potenza</option>
            <option value="PO">Prato</option>
            <option value="RG">Ragusa</option>
            <option value="RA">Ravenna</option>
            <option value="RC">Reggio Calabria</option>
            <option value="RE">Reggio Emilia</option>
            <option value="RI">Rieti</option>
            <option value="RN">Rimini</option>
            <option value="RM">Roma</option>
            <option value="RO">Rovigo</option>
            <option value="SA">Salerno</option>
            <option value="SS">Sassari</option>
            <option value="SV">Savona</option>
            <option value="SI">Siena</option>
            <option value="SR">Siracusa</option>
            <option value="SO">Sondrio</option>
            <option value="TA">Taranto</option>
            <option value="TE">Teramo</option>
            <option value="TR">Terni</option>
            <option value="TO">Torino</option>
            <option value="TP">Trapani</option>
            <option value="TN">Trento</option>
            <option value="TV">Treviso</option>
            <option value="TS">Trieste</option>
            <option value="UD">Udine</option>
            <option value="VA">Varese</option>
            <option value="VE">Venezia</option>
            <option value="VB">Verbano-Cusio-Ossola</option>
            <option value="VC">Vercelli</option>
            <option value="VR">Verona</option>
            <option value="VV">Vibo Valentia</option>
            <option value="VI">Vicenza</option>
            <option value="VT">Viterbo</option>`
            break;
        case "Spain":
            stateSelect.innerHTML += `
            <option disabled>----- Spain Provinces -----</option>
            <option value="C" selected="selected">A Coruña</option>
            <option value="VI">Álava</option>
            <option value="AB">Albacete</option>
            <option value="A">Alicante</option>
            <option value="AL">Almería</option>
            <option value="O">Asturias</option>
            <option value="AV">Ávila</option>
            <option value="BA">Badajoz</option>
            <option value="PM">Balears</option>
            <option value="B">Barcelona</option>
            <option value="BU">Burgos</option>
            <option value="CC">Cáceres</option>
            <option value="CA">Cádiz</option>
            <option value="S">Cantabria</option>
            <option value="CS">Castellón</option>
            <option value="CE">Ceuta</option>
            <option value="CR">Ciudad Real</option>
            <option value="CO">Córdoba</option>
            <option value="CU">Cuenca</option>
            <option value="GI">Girona</option>
            <option value="GR">Granada</option>
            <option value="GU">Guadalajara</option>
            <option value="SS">Guipúzcoa</option>
            <option value="H">Huelva</option>
            <option value="HU">Huesca</option>
            <option value="J">Jaén</option>
            <option value="LO">La Rioja</option>
            <option value="GC">Las Palmas</option>
            <option value="LE">León</option>
            <option value="L">Lleida</option>
            <option value="LU">Lugo</option>
            <option value="M">Madrid</option>
            <option value="MA">Málaga</option>
            <option value="ML">Melilla</option>
            <option value="MU">Murcia</option>
            <option value="NA">Navarra</option>
            <option value="OR">Ourense</option>
            <option value="P">Palencia</option>
            <option value="PO">Pontevedra</option>
            <option value="SA">Salamanca</option>
            <option value="TF">Santa Cruz de Tenerife</option>
            <option value="SG">Segovia</option>
            <option value="SE">Sevilla</option>
            <option value="SO">Soria</option>
            <option value="T">Tarragona</option>
            <option value="TE">Teruel</option>
            <option value="TO">Toledo</option>
            <option value="V">Valencia</option>
            <option value="VA">Valladolid</option>
            <option value="BI">Vizcaya</option>
            <option value="ZA">Zamora</option>
            <option value="Z">Zaragoza</option>`
            break;
        case "United States":
            stateSelect.innerHTML += `
            <option disabled>----- US States/Provinces -----</option>
            <option value="AL" selected="selected">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AS">American Samoa</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FM">Federated States of Micronesia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="GU">Guam</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MH">Marshall Islands</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota </option>
            <option value="MP">Northern Mariana Islands</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PW">Palau</option>
            <option value="PA">Pennsylvania</option>
            <option value="PR">Puerto Rico</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VI">Virgin Islands</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
            <option value="AA">Armed Forces Americas</option>
            <option value="AE">Armed Forces Europe</option>
            <option value="AP">Armed Forces Pacific</option>`
            break;
        case "Australia":
            stateSelect.innerHTML += `
            <option disabled>--- Australia State/Territory ---</option>
            <option value="ACT" selected="selected">Australian Capital Territory</option>
            <option value="NSW">New SouthWales</option>
            <option value="NT">NorthernTerritory</option>
            <option value="QLD">Queensland</option>
            <option value="SA">South Australia</option>
            <option value="TAS">Tasmania</option>
            <option value="VIC">Victoria</option>
            <option value="WA">Western Australia</option>`
            break;
        case "Canada":
            stateSelect.innerHTML += `
            <option disabled>----- Canada Provinces -----</option>
            <option value="AB" selected="selected">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NT">Northwest Territories</option>
            <option value="NS">Nova Scotia</option>
            <option value="NU">Nunavut</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="YT">Yukon</option>`
            break;
        case "United Arab Emirate":
            stateSelect.innerHTML += `
            <option disabled>--- Emirate ---</option>
            <option value="AZ" selected="selected">Abu Dhabi</option>
            <option value="AJ">Ajman</option>
            <option value="DU">Dubai</option>
            <option value="FU">Fujairah</option>
            <option value="RK">Ras al-Khaimah</option>
            <option value="SH">Sharjah</option>
            <option value="UQ">Umm al-Quwain</option>`
            break;
        case "Japan":
            stateSelect.innerHTML += `
            <option disabled>--- Japan ---</option>
            <option value=" 北海道" selected="selected"> 北海道</option>
            <option value=" 青森県"> 青森県</option>
            <option value=" 岩手県"> 岩手県</option>
            <option value=" 宮城県"> 宮城県</option>
            <option value=" 秋田県"> 秋田県</option>
            <option value=" 山形県"> 山形県</option>
            <option value=" 福島県"> 福島県</option>
            <option value=" 茨城県"> 茨城県</option>
            <option value=" 栃木県"> 栃木県</option>
            <option value=" 群馬県"> 群馬県</option>
            <option value=" 埼玉県"> 埼玉県</option>
            <option value=" 千葉県"> 千葉県</option>
            <option value=" 東京都"> 東京都</option>
            <option value=" 神奈川県"> 神奈川県</option>
            <option value=" 新潟県"> 新潟県</option>
            <option value=" 富山県"> 富山県</option>
            <option value=" 石川県"> 石川県</option>
            <option value=" 福井県"> 福井県</option>
            <option value=" 山梨県"> 山梨県</option>
            <option value=" 長野県"> 長野県</option>
            <option value=" 岐阜県"> 岐阜県</option>
            <option value=" 静岡県"> 静岡県</option>
            <option value=" 愛知県"> 愛知県</option>
            <option value=" 三重県"> 三重県</option>
            <option value=" 滋賀県"> 滋賀県</option>
            <option value=" 京都府"> 京都府</option>
            <option value=" 大阪府"> 大阪府</option>
            <option value=" 兵庫県"> 兵庫県</option>
            <option value=" 奈良県"> 奈良県</option>
            <option value=" 和歌山県"> 和歌山県</option>
            <option value=" 鳥取県"> 鳥取県</option>
            <option value=" 島根県"> 島根県</option>
            <option value=" 岡山県"> 岡山県</option>
            <option value=" 広島県"> 広島県</option>
            <option value=" 山口県"> 山口県</option>
            <option value=" 徳島県"> 徳島県</option>
            <option value=" 香川県"> 香川県</option>
            <option value=" 愛媛県"> 愛媛県</option>
            <option value=" 高知県"> 高知県</option>
            <option value=" 福岡県"> 福岡県</option>
            <option value=" 佐賀県"> 佐賀県</option>
            <option value=" 長崎県"> 長崎県</option>
            <option value=" 熊本県"> 熊本県</option>
            <option value=" 大分県"> 大分県</option>
            <option value=" 宮崎県"> 宮崎県</option>
            <option value=" 鹿児島県"> 鹿児島県</option>
            <option value=" 沖縄県"> 沖縄県</option>`
            break;
        case "Mexico":
            stateSelect.innerHTML += `
            <option disabled="">State</option>
            <option  value="AGS" selected="selected">
                Aguascalientes</option>
            <option  value="BC">Baja
                California</option>
            <option  value="BCS">Baja
                California Sur</option>
            <option  value="CAMP">Campeche
            </option>
            <option  value="CHIS">Chiapas</option>
            <option  value="CHIH">Chihuahua
            </option>
            <option value="DF">Ciudad de México</option>
            <option  value="COAH">Coahuila
            </option>
            <option  value="COL">Colima</option>
            <option  value="DGO">Durango</option>
            <option  value="GTO">Guanajuato
            </option>
            <option  value="GRO">Guerrero</option>
            <option  value="HGO">Hidalgo</option>
            <option  value="JAL">Jalisco</option>
            <option  value="MEX">
                México</option>
            <option 
                value="MICH">Michoacán</option>
            <option  value="MOR">Morelos</option>
            <option  value="NAY">Nayarit</option>
            <option 
                value="NL">Nuevo León</option>
            <option  value="OAX">Oaxaca</option>
            <option  value="PUE">Puebla</option>
            <option 
                value="QRO">Querétaro</option>
            <option  value="Q ROO">Quintana
                Roo</option>
            <option value="SLP">San Luis Potosí</option>
            <option  value="SIN">Sinaloa</option>
            <option  value="SON">Sonora</option>
            <option  value="TAB">Tabasco</option>
            <option  value="TAMPS">Tamaulipas
            </option>
            <option  value="TLAX">Tlaxcala
            </option>
            <option  value="VER">Veracruz</option>
            <option  value="YUC">Yucatán</option>
            <option  value="ZAC">Zacatecas
            </option>`
            break;
        case "Colombia":
            stateSelect.innerHTML += `
            <option disabled="">Province</option>
            <option value="DC" selected="selected">Bogotá, D.C.</option>
            <option  value="AMA">Amazonas</option>
            <option  value="ANT">Antioquia</option>
            <option  value="ARA">Arauca</option>
            <option value="ATL">Atlántico</option>
            <option  value="BOL">Bolívar</option>
            <option  value="BOY">Boyacá</option>
            <option  value="CAL">Caldas</option>
            <option  value="CAQ">Caquetá</option>
            <option  value="CAS">Casanare</option>
            <option  value="CAU">Cauca</option>
            <option  value="CES">Cesar</option>
            <option  value="CHO">Chocó</option>
            <option  value="COR">Córdoba</option>
            <option  value="CUN">Cundinamarca</option>
            <option  value="GUA">Guainía</option>
            <option  value="GUV">Guaviare</option>
            <option  value="HUI">Huila</option>
            <option  value="LAG">La Guajira</option>
            <option  value="MAG">Magdalena</option>
            <option  value="MET">Meta</option>
            <option  value="NAR">Nariño</option>
            <option  value="NSA">Norte de Santander</option>
            <option  value="PUT">Putumayo</option>
            <option  value="QUI">Quindío</option>
            <option  value="RIS">Risaralda</option>
            <option value="SAP">San Andrés, Providencia y Santa Catalina</option>
            <option  value="SAN">Santander</option>
            <option  value="SUC">Sucre</option>
            <option  value="TOL">Tolima</option>
            <option  value="VAC">Valle del Cauca</option>
            <option  value="VAU">Vaupés</option>
            <option  value="VID">Vichada</option>`
            break;
        case "Chile":
            stateSelect.innerHTML +=`
            <option disabled="">Region</option>
            <option value="AN" selected="selected">Antofagasta</option>
            <option value="AR">Araucanía</option>
            <option value="AP">Arica and Parinacota</option>
            <option value="AT">Atacama</option>
            <option value="AI">Aysén</option>
            <option value="BI">Biobío</option>
            <option value="CO">Coquimbo</option>
            <option value="LL">Los Lagos</option>
            <option value="LR">Los Ríos</option>
            <option value="MA">Magallanes</option>
            <option value="ML">Maule</option>
            <option value="NB">Ñuble</option>
            <option value="LI">O'Higgins</option>
            <option value="RM">Santiago</option>
            <option value="TA">Tarapacá</option>
            <option value="VS">Valparaíso</option>`
            break;

        default:
            break;
    }
}