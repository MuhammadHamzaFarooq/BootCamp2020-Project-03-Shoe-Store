import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Container = styled.div`
	display: flex;
	padding: 20px ;
    margin: 20px 0px;
    /* border: 2px solid gray; */
    width: 100%;
`;
const Left = styled.div`
	flex: 1;
	/* border: 1px solid black; */
`;
const Center = styled.div`
	flex: 1;
	/* border: 1px solid black; */
`;

const Title = styled.h3`
	font-size: 30px;
	margin-left: 10xp;
	margin-bottom: 30px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;
const Right = styled.div`
	flex: 1;
	/* border: 1px solid black; */
`;

const Logo = styled.h1``;
const Desc = styled.p`margin: 20px 0px;`;
const SoicalContainer = styled.div`
	display: flex;
	margin: 3px;
`;
const SoicalIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: ${(props) => props.bg};
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	cursor: pointer;
`;

const ContactItems = styled.div`
	padding: 7px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`width: 50%;`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>M Hamza Farooq</Logo>
				<Desc>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quisquam incidunt doloremque iusto
					a quod, ullam magni. Est quasi sequi quidem placeat.
				</Desc>
				<SoicalContainer>
					<SoicalIcon bg="#5b40be">
						<LinkedInIcon />
					</SoicalIcon>
					<SoicalIcon bg="#290b94">
						<FacebookIcon />
					</SoicalIcon>
					<SoicalIcon bg="#d3289a">
						<InstagramIcon />
					</SoicalIcon>
					<SoicalIcon bg="#c00808">
						<GitHubIcon />
					</SoicalIcon>
				</SoicalContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accesories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wish List</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItems>
					<LocationOnIcon style={{ marginRight: '10px' }} />Nazimabad No # 02 Karachi
				</ContactItems>
				<ContactItems>
					<LocalPhoneIcon style={{ marginRight: '10px' }} />+92 324 024 32 07
				</ContactItems>
				<ContactItems>
					<EmailIcon style={{ marginRight: '10px' }} />mhamza2021999@gmail.com
				</ContactItems>
				<ContactItems>
					<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
				</ContactItems>
			</Right>
		</Container>
	);
};

export default Footer;
