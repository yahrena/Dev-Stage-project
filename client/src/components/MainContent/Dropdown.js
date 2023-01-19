import React from 'react';
// import Select from 'react-select';
import { Form } from 'react-bootstrap';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			regions : [],
			districts : [],
			communes : [],
			selectedRegion : '--Choose Region--',
			selectedDistrict : '--Choose District--'
		};
		this.changeRegion = this.changeRegion.bind(this);
		this.changeDistrict = this.changeDistrict.bind(this);
	}
  
	componentDidMount() {
		this.setState({
			regions: [
                { name: 'Analamanga', districts: [
                                            {name: 'Ambohidratrimo', communes: ['Ambohidratrimo','Anosiala']},
                                            {name: 'Andramasina', communes: ['Andramasina, Mandrosoa']},
                                            {name: 'Anjozorobe', communes: ['Anjozorobe, Mamngamila']}
                                             ]
                                            
                },
                { name: 'Androy', districts: [
                                            {name: 'Ambovombe-Androy', communes: ['Ambovombe','Tsimananada']},
                                            {name: 'Bekily', communes: ['Morafeno-Bekily', 'Besakoa']},
                                            {name: 'Beloha', communes: ['Beloha', 'Tranovaho']}
                                             ]
                                            
                }
            ]
		});
	}
  
	changeRegion(event) {
		this.setState({selectedRegion: event.target.value});
		this.setState({districts : this.state.regions.find(cntry => cntry.name === event.target.value).districts});
	}

	changeDistrict(event) {
		this.setState({selectedDistrict: event.target.value});
		const stats = this.state.regions.find(cntry => cntry.name === this.state.selectedRegion).districts;
		this.setState({communes : stats.find(stat => stat.name === event.target.value).communes});
	}
	
	render() {
		return (
			<div id="container">
	
				<div>
					<label>Region</label>
					<Form.Select placeholder="Region" value={this.state.selectedRegion} onChange={this.changeRegion}>
						<option>--Choose Region--</option>
						{this.state.regions.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</Form.Select>
                    
                    {/* {this.state.countries.map((e, key) => {
							return <Select value={this.state.selectedCountry} onChange={this.changeCountry} key={key}>{e.name}</Select>;
						})} */}

				</div>

				<div>
					<label>District</label>
					<Form.Select placeholder="District" value={this.state.selectedDistrict} onChange={this.changeDistrict}>
						<option>--Choose District--</option>
						{this.state.districts.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</Form.Select>
				</div>
				
				<div>
					<label>Commune</label>
					<Form.Select placeholder="Commune">
						<option>--Choose City--</option>
						{this.state.communes.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</Form.Select>
				</div>
			</div>
		)
	}
}

export default Dropdown;