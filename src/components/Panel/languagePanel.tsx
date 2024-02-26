import { Button, Grid, Typography } from '@mui/material';

export default function languagePanel({
  selectedLanguage,
}: {
  selectedLanguage: string;
}) {
  return (
    <>
      <Typography
        gutterBottom
        variant='h5'
        component='div'
        border='thick'
        textAlign='left'
      >
        언어를 선택하세요.
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid>
          <Button>aa</Button>
        </Grid>
        <Grid>
          <Button>bb</Button>
        </Grid>
        <Grid>
          <Button>cc</Button>
        </Grid>
        <Grid>
          <Button>dd</Button>
        </Grid>
      </Grid>
    </>
  );
}
