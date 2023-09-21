import React, { useState } from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import SortIcon from "@mui/icons-material/Sort";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Menu, MenuItem } from "@mui/material";
import { EnhancedTableToolbarProps, Continents } from "../utils/interfaces";
import { continents } from "../utils";

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected, handleRequestSort, order, setfilterVal } = props;

  const [anchorElSort, setAnchorElSort] = useState<null | HTMLElement>(null);
  const [continentName, setContinentName] = useState<string>("All Countries");
  const [anchorElFilter, setAnchorElFilter] = useState<null | HTMLElement>(
    null,
  );

  const handleOpenSortMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSort(event.currentTarget);
  };

  const handleCloseSortMenu = () => {
    setAnchorElSort(null);
  };
  const handleOpenFilterMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElFilter(event.currentTarget);
  };

  const handleCloseFilterMenu = () => {
    setAnchorElFilter(null);
  };
  const handleFilter = (continent: Continents) => {
    if (continent.name === "No Filter") {
      setfilterVal("none");
      setContinentName("All Countries");
    } else {
      setfilterVal(continent.abbr);
      setContinentName(continent.name);
    }
    handleCloseFilterMenu();
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {continentName}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <>
          <Box sx={{ flexGrow: 0, mr: "12px" }}>
            <Tooltip title="Sort by Name Un">
              <Button
                onClick={handleOpenSortMenu}
                variant="outlined"
                sx={{ fontWeight: "700", textTransform: "none" }}
                endIcon={<SortIcon />}
              >
                Sort
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElSort}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElSort)}
              onClose={handleCloseSortMenu}
            >
              <MenuItem
                disabled={order === "asc"}
                onClick={() => {
                  handleRequestSort({}, "nameUn");
                  handleCloseSortMenu();
                }}
              >
                Asc
              </MenuItem>
              <MenuItem
                disabled={order === "desc"}
                onClick={() => {
                  handleRequestSort({}, "nameUn");
                  handleCloseSortMenu();
                }}
              >
                Desc
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, mr: "12px" }}>
            <Tooltip title="Filter by Continent">
              <Button
                onClick={handleOpenFilterMenu}
                variant="outlined"
                sx={{ fontWeight: "700", textTransform: "none" }}
                endIcon={<FilterListIcon />}
              >
                Filter
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElFilter}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElFilter)}
              onClose={handleCloseFilterMenu}
            >
              {continents.map((continent) => (
                <MenuItem
                  onClick={() => {
                    handleFilter(continent);
                  }}
                >
                  {continent.abbr}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </>
      )}
    </Toolbar>
  );
};
export default EnhancedTableToolbar;
