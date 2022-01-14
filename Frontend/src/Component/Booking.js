import React from 'react';
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./Booking.css";

const Booking = () => {
    window.scrollTo(0, 0);

    return (
        <div className='form-table'>
            <form>
                <h1>Online Truck Booking</h1>
                <h3>Please fill in the form correctly to book a truck Online</h3>
                <fieldset>

                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">NAME <strong>*</strong></label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Enter your name" autoComplete='off' required />
                    </div>

                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">LASTNAME <strong>*</strong></label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Enter your surname" autoComplete='off' required />
                    </div>

                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Phone <strong>*</strong></label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Enter your number" autoComplete='off' required />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">ADDRESS <strong>*</strong> </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" autoComplete='off' required></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">City <strong>*</strong> </label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Enter your city" autoComplete='off' required />
                    </div>

                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">STATE / PROVINCE</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Enter your state" autoComplete='off' />
                    </div>

                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">POSTAL / ZIPCODE</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Enter your state" autoComplete='off' />
                    </div>

                    <div className='select-box'>
                        <label for="disabledTextInput" class="form-label">SELECT COUNTRY <strong>*</strong></label>
                        <select class="form-select" aria-label="Default select example" required>
                            <option selected="selected" value=""></option>
                            <option value="United States"> United States </option>
                            <option value="Afghanistan"> Afghanistan </option>
                            <option value="Albania"> Albania </option>
                            <option value="Algeria"> Algeria </option>
                            <option value="American Samoa"> American Samoa </option>
                            <option value="Andorra"> Andorra </option>
                            <option value="Angola"> Angola </option>
                            <option value="Anguilla"> Anguilla </option>
                            <option value="Antigua and Barbuda"> Antigua and Barbuda </option>
                            <option value="Argentina"> Argentina </option>
                            <option value="Armenia"> Armenia </option>
                            <option value="Aruba"> Aruba </option>
                            <option value="Australia"> Australia </option>
                            <option value="Austria"> Austria </option>
                            <option value="Azerbaijan"> Azerbaijan </option>
                            <option value="The Bahamas"> The Bahamas </option>
                            <option value="Bahrain"> Bahrain </option>
                            <option value="Bangladesh"> Bangladesh </option>
                            <option value="Barbados"> Barbados </option>
                            <option value="Belarus"> Belarus </option>
                            <option value="Belgium"> Belgium </option>
                            <option value="Belize"> Belize </option>
                            <option value="Benin"> Benin </option>
                            <option value="Bermuda"> Bermuda </option>
                            <option value="Bhutan"> Bhutan </option>
                            <option value="Bolivia"> Bolivia </option>
                            <option value="Bosnia and Herzegovina"> Bosnia and Herzegovina </option>
                            <option value="Botswana"> Botswana </option>
                            <option value="Brazil"> Brazil </option>
                            <option value="Brunei"> Brunei </option>
                            <option value="Bulgaria"> Bulgaria </option>
                            <option value="Burkina Faso"> Burkina Faso </option>
                            <option value="Burundi"> Burundi </option>
                            <option value="Cambodia"> Cambodia </option>
                            <option value="Cameroon"> Cameroon </option>
                            <option value="Canada"> Canada </option>
                            <option value="Cape Verde"> Cape Verde </option>
                            <option value="Cayman Islands"> Cayman Islands </option>
                            <option value="Central African Republic"> Central African Republic </option>
                            <option value="Chad"> Chad </option>
                            <option value="Chile"> Chile </option>
                            <option value="China"> China </option>
                            <option value="Christmas Island"> Christmas Island </option>
                            <option value="Cocos (Keeling) Islands"> Cocos (Keeling) Islands </option>
                            <option value="Colombia"> Colombia </option>
                            <option value="Comoros"> Comoros </option>
                            <option value="Congo"> Congo </option>
                            <option value="Cook Islands"> Cook Islands </option>
                            <option value="Costa Rica"> Costa Rica </option>
                            <option value="Cote d'Ivoire"> Cote d'Ivoire </option>
                            <option value="Croatia"> Croatia </option>
                            <option value="Cuba"> Cuba </option>
                            <option value="Cyprus"> Cyprus </option>
                            <option value="Czech Republic"> Czech Republic </option>
                            <option value="Democratic Republic of the Congo"> Democratic Republic of the Congo </option>
                            <option value="Denmark"> Denmark </option>
                            <option value="Djibouti"> Djibouti </option>
                            <option value="Dominica"> Dominica </option>
                            <option value="Dominican Republic"> Dominican Republic </option>
                            <option value="Ecuador"> Ecuador </option>
                            <option value="Egypt"> Egypt </option>
                            <option value="El Salvador"> El Salvador </option>
                            <option value="Equatorial Guinea"> Equatorial Guinea </option>
                            <option value="Eritrea"> Eritrea </option>
                            <option value="Estonia"> Estonia </option>
                            <option value="Ethiopia"> Ethiopia </option>
                            <option value="Falkland Islands"> Falkland Islands </option>
                            <option value="Faroe Islands"> Faroe Islands </option>
                            <option value="Fiji"> Fiji </option>
                            <option value="Finland"> Finland </option>
                            <option value="France"> France </option>
                            <option value="French Polynesia"> French Polynesia </option>
                            <option value="Gabon"> Gabon </option>
                            <option value="The Gambia"> The Gambia </option>
                            <option value="Georgia"> Georgia </option>
                            <option value="Germany"> Germany </option>
                            <option value="Ghana"> Ghana </option>
                            <option value="Gibraltar"> Gibraltar </option>
                            <option value="Greece"> Greece </option>
                            <option value="Greenland"> Greenland </option>
                            <option value="Grenada"> Grenada </option>
                            <option value="Guadeloupe"> Guadeloupe </option>
                            <option value="Guam"> Guam </option>
                            <option value="Guatemala"> Guatemala </option>
                            <option value="Guernsey"> Guernsey </option>
                            <option value="Guinea"> Guinea </option>
                            <option value="Guinea-Bissau"> Guinea-Bissau </option>
                            <option value="Guyana"> Guyana </option>
                            <option value="Haiti"> Haiti </option>
                            <option value="Honduras"> Honduras </option>
                            <option value="Hong Kong"> Hong Kong </option>
                            <option value="Hungary"> Hungary </option>
                            <option value="Iceland"> Iceland </option>
                            <option value="India"> India </option>
                            <option value="Indonesia"> Indonesia </option>
                            <option value="Iran"> Iran </option>
                            <option value="Iraq"> Iraq </option>
                            <option value="Ireland"> Ireland </option>
                            <option value="Israel"> Israel </option>
                            <option value="Italy"> Italy </option>
                            <option value="Jamaica"> Jamaica </option>
                            <option value="Japan"> Japan </option>
                            <option value="Jersey"> Jersey </option>
                            <option value="Jordan"> Jordan </option>
                            <option value="Kazakhstan"> Kazakhstan </option>
                            <option value="Kenya"> Kenya </option>
                            <option value="Kiribati"> Kiribati </option>
                            <option value="North Korea"> North Korea </option>
                            <option value="South Korea"> South Korea </option>
                            <option value="Kosovo"> Kosovo </option>
                            <option value="Kuwait"> Kuwait </option>
                            <option value="Kyrgyzstan"> Kyrgyzstan </option>
                            <option value="Laos"> Laos </option>
                            <option value="Latvia"> Latvia </option>
                            <option value="Lebanon"> Lebanon </option>
                            <option value="Lesotho"> Lesotho </option>
                            <option value="Liberia"> Liberia </option>
                            <option value="Libya"> Libya </option>
                            <option value="Liechtenstein"> Liechtenstein </option>
                            <option value="Lithuania"> Lithuania </option>
                            <option value="Luxembourg"> Luxembourg </option>
                            <option value="Macau"> Macau </option>
                            <option value="Macedonia"> Macedonia </option>
                            <option value="Madagascar"> Madagascar </option>
                            <option value="Malawi"> Malawi </option>
                            <option value="Malaysia"> Malaysia </option>
                            <option value="Maldives"> Maldives </option>
                            <option value="Mali"> Mali </option>
                            <option value="Malta"> Malta </option>
                            <option value="Marshall Islands"> Marshall Islands </option>
                            <option value="Martinique"> Martinique </option>
                            <option value="Mauritania"> Mauritania </option>
                            <option value="Mauritius"> Mauritius </option>
                            <option value="Mayotte"> Mayotte </option>
                            <option value="Mexico"> Mexico </option>
                            <option value="Micronesia"> Micronesia </option>
                            <option value="Moldova"> Moldova </option>
                            <option value="Monaco"> Monaco </option>
                            <option value="Mongolia"> Mongolia </option>
                            <option value="Montenegro"> Montenegro </option>
                            <option value="Montserrat"> Montserrat </option>
                            <option value="Morocco"> Morocco </option>
                            <option value="Mozambique"> Mozambique </option>
                            <option value="Myanmar"> Myanmar </option>
                            <option value="Nagorno-Karabakh"> Nagorno-Karabakh </option>
                            <option value="Namibia"> Namibia </option>
                            <option value="Nauru"> Nauru </option>
                            <option value="Nepal"> Nepal </option>
                            <option value="Netherlands"> Netherlands </option>
                            <option value="Netherlands Antilles"> Netherlands Antilles </option>
                            <option value="New Caledonia"> New Caledonia </option>
                            <option value="New Zealand"> New Zealand </option>
                            <option value="Nicaragua"> Nicaragua </option>
                            <option value="Niger"> Niger </option>
                            <option value="Nigeria"> Nigeria </option>
                            <option value="Niue"> Niue </option>
                            <option value="Norfolk Island"> Norfolk Island </option>
                            <option value="Turkish Republic of Northern Cyprus"> Turkish Republic of Northern Cyprus </option>
                            <option value="Northern Mariana"> Northern Mariana </option>
                            <option value="Norway"> Norway </option>
                            <option value="Oman"> Oman </option>
                            <option value="Pakistan"> Pakistan </option>
                            <option value="Palau"> Palau </option>
                            <option value="Palestine"> Palestine </option>
                            <option value="Panama"> Panama </option>
                            <option value="Papua New Guinea"> Papua New Guinea </option>
                            <option value="Paraguay"> Paraguay </option>
                            <option value="Peru"> Peru </option>
                            <option value="Philippines"> Philippines </option>
                            <option value="Pitcairn Islands"> Pitcairn Islands </option>
                            <option value="Poland"> Poland </option>
                            <option value="Portugal"> Portugal </option>
                            <option value="Puerto Rico"> Puerto Rico </option>
                            <option value="Qatar"> Qatar </option>
                            <option value="Republic of the Congo"> Republic of the Congo </option>
                            <option value="Romania"> Romania </option>
                            <option value="Russia"> Russia </option>
                            <option value="Rwanda"> Rwanda </option>
                            <option value="Saint Barthelemy"> Saint Barthelemy </option>
                            <option value="Saint Helena"> Saint Helena </option>
                            <option value="Saint Kitts and Nevis"> Saint Kitts and Nevis </option>
                            <option value="Saint Lucia"> Saint Lucia </option>
                            <option value="Saint Martin"> Saint Martin </option>
                            <option value="Saint Pierre and Miquelon"> Saint Pierre and Miquelon </option>
                            <option value="Saint Vincent and the Grenadines"> Saint Vincent and the Grenadines </option>
                            <option value="Samoa"> Samoa </option>
                            <option value="San Marino"> San Marino </option>
                            <option value="Sao Tome and Principe"> Sao Tome and Principe </option>
                            <option value="Saudi Arabia"> Saudi Arabia </option>
                            <option value="Senegal"> Senegal </option>
                            <option value="Serbia"> Serbia </option>
                            <option value="Seychelles"> Seychelles </option>
                            <option value="Sierra Leone"> Sierra Leone </option>
                            <option value="Singapore"> Singapore </option>
                            <option value="Slovakia"> Slovakia </option>
                            <option value="Slovenia"> Slovenia </option>
                            <option value="Solomon Islands"> Solomon Islands </option>
                            <option value="Somalia"> Somalia </option>
                            <option value="Somaliland"> Somaliland </option>
                            <option value="South Africa"> South Africa </option>
                            <option value="South Ossetia"> South Ossetia </option>
                            <option value="South Sudan"> South Sudan </option>
                            <option value="Spain"> Spain </option>
                            <option value="Sri Lanka"> Sri Lanka </option>
                            <option value="Sudan"> Sudan </option>
                            <option value="Suriname"> Suriname </option>
                            <option value="Svalbard"> Svalbard </option>
                            <option value="Swaziland"> Swaziland </option>
                            <option value="Sweden"> Sweden </option>
                            <option value="Switzerland"> Switzerland </option>
                            <option value="Syria"> Syria </option>
                            <option value="Taiwan"> Taiwan </option>
                            <option value="Tajikistan"> Tajikistan </option>
                            <option value="Tanzania"> Tanzania </option>
                            <option value="Thailand"> Thailand </option>
                            <option value="Timor-Leste"> Timor-Leste </option>
                            <option value="Togo"> Togo </option>
                            <option value="Tokelau"> Tokelau </option>
                            <option value="Tonga"> Tonga </option>
                            <option value="Transnistria Pridnestrovie"> Transnistria Pridnestrovie </option>
                            <option value="Trinidad and Tobago"> Trinidad and Tobago </option>
                            <option value="Tristan da Cunha"> Tristan da Cunha </option>
                            <option value="Tunisia"> Tunisia </option>
                            <option value="Turkey"> Turkey </option>
                            <option value="Turkmenistan"> Turkmenistan </option>
                            <option value="Turks and Caicos Islands"> Turks and Caicos Islands </option>
                            <option value="Tuvalu"> Tuvalu </option>
                            <option value="Uganda"> Uganda </option>
                            <option value="Ukraine"> Ukraine </option>
                            <option value="United Arab Emirates"> United Arab Emirates </option>
                            <option value="United Kingdom"> United Kingdom </option>
                            <option value="Uruguay"> Uruguay </option>
                            <option value="Uzbekistan"> Uzbekistan </option>
                            <option value="Vanuatu"> Vanuatu </option>
                            <option value="Vatican City"> Vatican City </option>
                            <option value="Venezuela"> Venezuela </option>
                            <option value="Vietnam"> Vietnam </option>
                            <option value="British Virgin Islands"> British Virgin Islands </option>
                            <option value="Isle of Man"> Isle of Man </option>
                            <option value="US Virgin Islands"> US Virgin Islands </option>
                            <option value="Wallis and Futuna"> Wallis and Futuna </option>
                            <option value="Western Sahara"> Western Sahara </option>
                            <option value="Yemen"> Yemen </option>
                            <option value="Zambia"> Zambia </option>
                            <option value="Zimbabwe"> Zimbabwe </option>
                            <option value="other"> Other </option>
                        </select>
                    </div>

                    <div className='date-select'>
                        <DateTimePickerComponent placeholder="Enter Date Range"></DateTimePickerComponent>
                    </div>

                    <div className='select-box'>
                        <label for="disabledTextInput" class="form-label">SELECT VEHICLES <strong>*</strong></label>
                        <select class="form-select" aria-label="Default select example" required>
                            <option selected="selected"></option>
                            <option value="Agricultural Truck"> Agricultural Truck</option>
                            <option value="Box/Straight Truck"> Box/Straight Truck </option>
                            <option value="Car Carrier">Car Carrier</option>
                            <option value="Car Carrier">Car Carrier</option>
                            <option value="Cement Mixer">Cement Mixer</option>
                            <option value="Delivery Van">Delivery Van</option>
                            <option value="Dump Truck">Dump Truck</option>
                            <option value="Flat Bed Truck">Flat Bed Truck</option>
                            <option value="Refrigerated Truck">Refrigerated Truck</option>
                            <option value="Stake Body Truck">Stake Body Truck</option>
                            <option value="Step Van">Step Van</option>
                            <option value="Tank Truck">Tank Truck</option>
                            <option value="Truck Tractor">Truck Tractor</option>
                        </select>
                    </div>

                    <div className='select-box'>
                        <label for="disabledTextInput" class="form-label">FROM :</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected="selected">  </option>
                            <option value="Andhra Pradesh"> Andhra Pradesh </option>
                            <option value="Assam"> Assam </option>
                            <option value="Bihar"> Bihar</option>
                            <option value="Gujrat"> Gujrat </option>
                            <option value="Goa">Goa  </option>
                            <option value="Haryana"> Haryana </option>
                            <option value="Himachal P"> Himachal P</option>
                            <option value="Jammu & Kashmir"> Jammu & Kashmir </option>
                            <option value="Karnataka"> Karnataka </option>
                            <option value="Kerala"> Kerala </option>
                            <option value="Madhya P"> Madhya P </option>
                            <option value="Maharashtra"> Maharashtra</option>
                            <option value="Manipur"> Manipur </option>
                            <option value="Meghalaya"> Meghalaya </option>
                            <option value="Mizoram"> Mizoram </option>
                            <option value="Nagaland"> Nagaland </option>
                            <option value="Orrisa"> Orrisa </option>
                            <option value="Punjab"> Punjab </option>
                            <option value="Rajasthan"> Rajasthan </option>
                            <option value="Sikkim"> Sikkim </option>
                            <option value="Tamil Nadu"> Tamil Nadu </option>
                            <option value="Tripura"> Tripura </option>
                            <option value="Uttar Pradesh"> Uttar Pradesh </option>
                            <option value="West Bengal"> West Bengal </option>
                            <option value="Chhatisgarh"> Chhatisgarh </option>
                            <option value="Uttrakhand"> Uttrakhand </option>
                            <option value="Jharkhand"> Jharkhand </option>
                            <option value="Telangana"> Telangana </option>
                        </select>
                    </div>

                    <div className='select-box'>
                        <label for="disabledTextInput" class="form-label">TO :</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected="selected">  </option>
                            <option value="Andhra Pradesh"> Andhra Pradesh </option>
                            <option value="Assam"> Assam </option>
                            <option value="Bihar"> Bihar</option>
                            <option value="Gujrat"> Gujrat </option>
                            <option value="Goa">Goa  </option>
                            <option value="Haryana"> Haryana </option>
                            <option value="Himachal P"> Himachal P</option>
                            <option value="Jammu & Kashmir"> Jammu & Kashmir </option>
                            <option value="Karnataka"> Karnataka </option>
                            <option value="Kerala"> Kerala </option>
                            <option value="Madhya P"> Madhya P </option>
                            <option value="Maharashtra"> Maharashtra</option>
                            <option value="Manipur"> Manipur </option>
                            <option value="Meghalaya"> Meghalaya </option>
                            <option value="Mizoram"> Mizoram </option>
                            <option value="Nagaland"> Nagaland </option>
                            <option value="Orrisa"> Orrisa </option>
                            <option value="Punjab"> Punjab </option>
                            <option value="Rajasthan"> Rajasthan </option>
                            <option value="Sikkim"> Sikkim </option>
                            <option value="Tamil Nadu"> Tamil Nadu </option>
                            <option value="Tripura"> Tripura </option>
                            <option value="Uttar Pradesh"> Uttar Pradesh </option>
                            <option value="West Bengal"> West Bengal </option>
                            <option value="Chhatisgarh"> Chhatisgarh </option>
                            <option value="Uttrakhand"> Uttrakhand </option>
                            <option value="Jharkhand"> Jharkhand </option>
                            <option value="Telangana"> Telangana </option>
                        </select>
                    </div>

                    <div className='price'>
                        <h4>Truck Fire prices <strong>*</strong></h4>
                        <input type="checkbox" required />
                        <span className='price-text'>&nbsp;&nbsp;0 - 10 km Truck Fare <strong>&nbsp;&nbsp;$ 5.00</strong></span>

                        <br />

                        <input type="checkbox" />
                        <span className='price-text'>&nbsp;&nbsp;0 - 10 km Truck Fare(Return Included) <strong>&nbsp;&nbsp;$ 10.00</strong></span>

                        <br />

                        <input type="checkbox" />
                        <span className='price-text'>&nbsp;&nbsp;11 - 20 km Truck Fare <strong>&nbsp;&nbsp;$ 10.00</strong></span>

                        <br />

                        <input type="checkbox" />
                        <span className='price-text'>&nbsp;&nbsp;11 - 20 km Truck Fare(Return Included) <strong>&nbsp;&nbsp;$ 20.00</strong></span>

                        <br />

                        <input type="checkbox" />
                        <span className='price-text'>&nbsp;&nbsp;21 - 40 km Truck Fare <strong>&nbsp;&nbsp;$ 25.00</strong></span>

                        <br />

                        <input type="checkbox" />
                        <span className='price-text'>&nbsp;&nbsp;21 - 40 km Truck Fare(Return Included) <strong>&nbsp;&nbsp;$ 50.00</strong></span>
                    </div>

                    <div className='red-text'>
                        <span class="form-description-content">If you want to return with us please select the payments with "return included" prices. Thanks!</span>
                    </div>

                    <div className='subtotal-container'>
                        <span className='subtotal-text'>
                            &nbsp;Subtotal :
                        </span>
                        <span className='payment-subtotal'>
                            <strong>&nbsp;$ 0.00</strong>
                        </span>

                        <br />

                        <span className='subtotal-text'>
                            &nbsp;Ok : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span className='payment-subtotal'>
                            <strong>&nbsp;$ 0.00</strong>
                        </span>
                    </div>

                    <span>
                        <h6> Total <strong>&nbsp;$ 0.00</strong></h6>
                    </span>
                    <button className="Booking-submit">
                        Book Truck
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default Booking
