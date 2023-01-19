import { React, useState } from 'react';
import { Form } from 'react-bootstrap';


function DropSelection() {
    const region = ['Analamanga', 'Androy', 'Analanjirofo']
    const district = {
        '--Choose region--': [],
        'Analamanga': ['Ambohidratrimo', 'Andramasina', 'Anjozorobe'],
        'Androy': ['Ambovombe-Androy', 'Bekily', 'Beloha']
    }
    const commune = {
        'Ambohidratrimo': ['Ambohidratrimo', 'Anosiala'],
        'Andramasina': ['Andramasina', 'Mandrosoa'],
        'Anjozorobe': ['Anjozorobe', 'Mangamila'],
        'Ambovombe-Androy': ['Ambovombe', 'Tsimananada'],
        'Bekily': ['Morafeno-Bekily', 'Besakoa'],
        'Beloha': ['Beloha', 'Tranovaho'],
    }


    const [selectedRegion, setSelectedRegion] = useState('')
    const [selectedDistrict, setSelectedDistrict] = useState('')
    const [selectedCommune, setSelectedCommune] = useState('')
    console.log(selectedRegion)
    console.log(selectedDistrict)
    console.log(selectedCommune)

    return (
        <div>
            <Form.Group>
                <Form.Label className="container">Region</Form.Label>
                <Form.Select onChange={(e) => { setSelectedRegion(e.target.value) }}>
                    <option>--Choose region--</option>
                    {
                        region.map(region => {
                            return <option>{region}</option>
                        })
                    }
                </Form.Select>
            </Form.Group>
            {selectedRegion && <Form.Group>
                <Form.Label className="container">District</Form.Label>
                <Form.Select onChange={(e) => { setSelectedDistrict(e.target.value) }}>
                    {
                        district[selectedRegion].map(district => {
                            return <option>{district}</option>
                        })
                    }
                </Form.Select>
            </Form.Group>}
            {selectedDistrict && <Form.Group>
                <Form.Label className="container">Commune</Form.Label>
                <Form.Select onChange={(e) => { setSelectedCommune(e.target.value) }}>
                    {
                        commune[selectedDistrict].map(commune => {
                            return <option>{commune}</option>
                        })
                    }
                </Form.Select>
            </Form.Group>}
        </div>
    )
}

export default DropSelection