import styled from "styled-components";
import BookDetails from "../../ui/BookDetails";
import CartButton from "../../ui/CartButton";
import ImgBox from "../../ui/ImgBox";

export default function EbookProduct({
  productImg,
  productName,
  productOfferPrice,
  productAuthor,
}) {
  return (
    <>
      <EbookProductBox>
        <Box>
          <ImgBox imageURL={productImg} />
          <ContentBox>
            <BookDetails type="booktitle">{productName}</BookDetails>
            <BookDetails type="author">By {productAuthor}</BookDetails>
            <BookDetails type="price">$ {productOfferPrice}</BookDetails>
            <ButtonFlex>
              <CartButton>Buy Now</CartButton>
              <CartButton>Add To Cart</CartButton>
            </ButtonFlex>
          </ContentBox>
        </Box>
      </EbookProductBox>
    </>
  );
}

const EbookProductBox = styled.div`
  opacity: 0px;
  width: 466.45px;
  height: 275.35px;
  gap: 0px;
`;
const Box = styled.div`
  display: flex;
  height: 225.35px;
  gap: 0px;
  opacity: 0px;
`;
// const ImgBox = styled.img`
//   width: auto;
//   height: auto;
//   padding: 20px;
//   object-fit: fit;
//   &:hover {
//     animation: ${scaleUp} 0.3s forwards;
//   }
// `;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 400px;
  gap: 16px;
`;

const ButtonFlex = styled.div`
  display: flex;
  gap: 10px;
`;
