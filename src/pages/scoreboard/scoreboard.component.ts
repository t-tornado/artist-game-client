import { useEffect, useState } from "react";
import { UserService } from "../../api";

export function useScoreboard() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  /**
   * EFFECTS
   */
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        setError(false);
        const data = (await UserService.getUsers()) as [];
        setUsers(data);
        setLoading(false);
        setError(false);
        // setUsers(dta)
      } catch (error: any) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  return {
    data: { users },
    handlers: {},
    states: {
      loading,
      error,
    },
  };
}
