import styled from 'styled-components';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';

const Navigation = styled.nav`
	display: flex;
	width: 100%;
	height: 85px;
	/* border: 2px solid black; */
`;
const Left = styled.div`
	flex: 1;
	/* border: 2px solid red; */
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const Language = styled.span`
	font-size: 40px;
	font-weight: 500;
	margin-left: 20px;
	padding-right: 10px;
	cursor: pointer;
`;
const SearchContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid gray;
`;
const Input = styled.input`
	border: none;
	padding: 10px 10px;
	outline: none;
	font-size: 15px;
`;

const Center = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	/* border: 2px solid blue; */
	align-items: center;
`;
const Logo = styled.h1`
	font-size: 45px;
	font-weight: 700;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	/* border: 2px solid green; */
	padding-right: 20px;
`;

const MenuItem = styled.ul`
	display: flex;
	list-style: none;
`;
const Item = styled.li`
	margin-right: 10px;
	font-size: 25px;
	font-weight: 500;
	cursor: pointer;
`;

const Navbar = () => {
	return (
		<Navigation>
			<Left>
				<Language>EN </Language>
				<SearchContainer>
					<Input />
					<SearchIcon />
				</SearchContainer>
			</Left>
			<Center>
				<Logo>SHOE STORE</Logo>
			</Center>
			<Right>
				<MenuItem>
					<Item>Home</Item>
					<Item>Product</Item>
					<Item>
						<Badge badgeContent={4} color="success">
							<AddShoppingCartOutlinedIcon />
						</Badge>
					</Item>
				</MenuItem>
			</Right>
		</Navigation>
	);
};

export default Navbar;
