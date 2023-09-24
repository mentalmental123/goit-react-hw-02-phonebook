import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Contacts } from "../components/ContactList/ContactList";
import { Form } from "../components/ContactForm/ContactForm";
import { fetchContact } from "../redux/operations";
import { selectIsLoading } from "../redux/selectors";

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <Form />
      <div>{isLoading && "Request in progress..."}</div>
      <Contacts />
    </>
  );
}
