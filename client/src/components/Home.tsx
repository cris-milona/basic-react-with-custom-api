import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
  Container,
  Paper,
} from "@mui/material";

interface Message {
  message: string;
}

interface User {
  id: number;
  name: string;
}

const fetchMessage = async () => {
  const { data } = await axiosInstance.get<Message>("/message");
  return data;
};

const fetchUsers = async () => {
  const { data } = await axiosInstance.get<User[]>("/users");
  return data;
};

export const Home = () => {
  const {
    data: messageData,
    isLoading: messageLoading,
    error: messageError,
  } = useQuery<Message>({
    queryKey: ["message"],
    queryFn: fetchMessage,
  });

  const {
    data: usersData,
    isLoading: usersLoading,
    error: usersError,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  console.log("Message Data:", messageData);
  console.log("Users Data:", usersData);

  if (messageLoading || usersLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (messageError || usersError) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Alert severity="error">
          Error loading data. Please try again later.
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {messageData?.message}
          </Typography>
          <Paper elevation={1} sx={{ mt: 2 }}>
            <List>
              {usersData?.map((user) => (
                <ListItem
                  key={user.id}
                  sx={{
                    "&:hover": {
                      backgroundColor: "action.hover",
                    },
                  }}
                >
                  <ListItemText primary={user.name} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </CardContent>
      </Card>
    </Container>
  );
};
