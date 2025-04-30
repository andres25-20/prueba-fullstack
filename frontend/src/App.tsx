import { useEffect, useState } from 'react';
import { getLocations } from './services/api';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

interface Location {
  code: string;
  name: string;
  image: string;
  creationDate: string;
}

function App() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    getLocations()
      .then(setLocations)
      .catch((err) => console.error('Error al obtener sedes:', err));
  }, []);

  return (
    <Container sx={{ marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Sedes
      </Typography>
      <Grid container spacing={2}>
        {locations.map((location) => (
          <Grid item xs={12} sm={6} md={4} key={location.code}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={location.image}
                alt={location.name}
              />
              <CardContent>
                <Typography variant="h6">{location.name}</Typography>
                <Typography variant="body2">Código: {location.code}</Typography>
                <Typography variant="body2">Creado: {location.creationDate}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
