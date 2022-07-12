import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './index.css'

const Article = (e: { title: string, content: string }) => {
    return (
        <Card sx={{minWidth: 275}} className={'card'}>
            <CardContent>
                <Typography variant="h6" component="div">
                    {e.title}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {e.content}
                </Typography>
            </CardContent>
        </Card>
    );
};
export default Article;